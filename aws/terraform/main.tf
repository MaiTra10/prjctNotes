# Initialize Terraform
terraform {
  required_providers {
    aws = {
      version = ">= 4.0.0"
      source = "hashicorp/aws"
    }
  }
}

# Specifies the provider region
provider "aws" {
  region = "us-west-2"
}
#Creates a DynamoDB table
resource "aws_dynamodb_table" "prjctNotes" {

  name    = "prjctNotes-DB"
  billing_mode = "PROVISIONED"
  read_capacity = 1
  write_capacity = 1
  hash_key = "email"
  range_key = "ctx"

  attribute {

      name = "email"
      type = "S"

  }

  attribute {

      name = "ctx"
      type = "S"

  }

}
# Creates a role for the lambda functions
resource "aws_iam_role" "lambda" {
  
  name = "iam-for-lambda-prjctNotes"
  assume_role_policy = jsonencode({

    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Effect": "Allow",
        "Sid": "",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        }
      }
    ]
  })
}
# Creates a policy for the lambda functions to interact with DynamoDB
resource "aws_iam_policy" "lambda-policy-prjctNotes" {
  
  name = "lambda_policies_prjctNotes"
  
  policy = jsonencode({

    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : ["dynamodb:*"],
        "Resource" : "${aws_dynamodb_table.prjctNotes.arn}"
      },
      {
        "Effect" : "Allow",
        "Action" : "ssm:GetParameters",
        "Resource" : "arn:aws:ssm:us-west-2:850985080824:parameter/prjctNotesLambdaPassword"
      }
    ]
  })
}
# Attaches the policy to the role
resource "aws_iam_role_policy_attachment" "attach" {
  
  role = aws_iam_role.lambda.name
  policy_arn = aws_iam_policy.lambda-policy-prjctNotes.arn

}
# Create zip files
data "archive_file" "sign-in" {

  type = "zip"
  source_file = "../functions/sign-in/main.py"
  output_path = "si-artifact.zip"

}
data "archive_file" "sign-up" {

  type = "zip"
  source_file = "../functions/sign-up/main.py"
  output_path = "su-artifact.zip"

}
data "archive_file" "forgot-pass" {

  type = "zip"
  source_file = "../functions/forgot-pass/main.py"
  output_path = "fp-artifact.zip"

}
# Creates a lambda function for sign-in
resource "aws_lambda_function" "sign-in-prjctNotes" {
  
  role = aws_iam_role.lambda.arn
  function_name = "sign-in-prjctNotes"
  handler = "main.lambda_sign_in"
  timeout = 8
  filename = "si-artifact.zip"
  source_code_hash = data.archive_file.sign-in.output_base64sha256
  runtime = "python3.9"

}
# Creates a lambda function URL for sign-in
resource "aws_lambda_function_url" "si-url-prjctNotes" {
  
  function_name = aws_lambda_function.sign-in-prjctNotes.function_name
  authorization_type = "NONE"

  cors {
    
    allow_credentials = true
    allow_origins = ["*"]
    allow_methods = ["POST"]
    allow_headers = ["*"]
    expose_headers = ["keep-alive", "date"]

  }
}
# Creates a lambda function for sign-up
resource "aws_lambda_function" "sign-up-prjctNotes" {
  
  role = aws_iam_role.lambda.arn
  function_name = "sign-up-prjctNotes"
  handler = "main.lambda_sign_up"
  timeout = 8
  filename = "su-artifact.zip"
  source_code_hash = data.archive_file.sign-up.output_base64sha256
  runtime = "python3.9"

}
# Creates a lambda function URL for sign-up
resource "aws_lambda_function_url" "su-url-prjctNotes" {
  
  function_name = aws_lambda_function.sign-up-prjctNotes.function_name
  authorization_type = "NONE"

  cors {
    
    allow_credentials = true
    allow_origins = ["*"]
    allow_methods = ["POST"]
    allow_headers = ["*"]
    expose_headers = ["keep-alive", "date"]

  }
}
# Creates a lambda function for forgot-pass
resource "aws_lambda_function" "forgot-pass-prjctNotes" {
  
  role = aws_iam_role.lambda.arn
  function_name = "forgot-pass-prjctNotes"
  handler = "main.lambda_forgot_pass"
  timeout = 8
  filename = "fp-artifact.zip"
  source_code_hash = data.archive_file.forgot-pass.output_base64sha256
  runtime = "python3.9"

}
# Creates a lambda function URL for forgot-pass
resource "aws_lambda_function_url" "fp-url-prjctNotes" {
  
  function_name = aws_lambda_function.forgot-pass-prjctNotes.function_name
  authorization_type = "NONE"

  cors {
    
    allow_credentials = true
    allow_origins = ["*"]
    allow_methods = ["POST"]
    allow_headers = ["*"]
    expose_headers = ["keep-alive", "date"]

  }
}
# Outputs the URLs for the lambda functions for convenience 
output "lambda-si-url" {
  value = aws_lambda_function_url.si-url-prjctNotes.function_url
}
output "lambda-su-url" {
  value = aws_lambda_function_url.su-url-prjctNotes.function_url
}
output "lambda-fp-url" {
  value = aws_lambda_function_url.fp-url-prjctNotes.function_url
}