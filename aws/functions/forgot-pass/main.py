import boto3
import json
import smtplib
import ssl
from email.message import EmailMessage

dynamoDB = boto3.resource("dynamodb")
table_name = "prjctNotes-DB"
table = dynamoDB.Table(table_name)
ses = boto3.client("ses", region_name="us-west-2")

def lambda_forgot_pass(event, ctx):

    url_request_type = event["requestContext"]["http"]["method"]
    
    if url_request_type == "POST":
        
        data = json.loads(event["body"])
        
        email = data["email"].lower()
    
        resp = table.get_item(TableName=table_name, Key={"email": email, "ctx": "password"})

        if "Item" in resp:
            
            receiver = resp["Item"]["email"]
            passDB = resp["Item"]["value"]
            ssm = boto3.client("ssm", region_name="us-west-2")
    
            response = ssm.get_parameters(
                Names=[
                    "prjctNotes_app_password"
                ],
                WithDecryption=True
            )
            sender = "prjctnotes@gmail.com"
            sender_pass = response["Parameters"][0]["Value"]
            
            subject = "prjctNotes Account Password Recovery"
            body = """
            The password associated with this e-mail is ' {password} '.
            """.format(password=passDB)
            em = EmailMessage()
            em["From"] = sender
            em["To"] = receiver
            em["Subject"] = subject
            em.set_content(body)
            
            ctx = ssl.create_default_context()
            
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ctx) as smtp:
                smtp.login(sender, sender_pass)
                smtp.sendmail(sender, receiver, em.as_string())
                
            return {"Status Code": 200}
            
        else:
            
            return {"Status Code": 404}
        
        
    else:
        
        return {
            "Error": "Incorrect URL Request Type",
            "Want": "POST",
            "Got": url_request_type
        }