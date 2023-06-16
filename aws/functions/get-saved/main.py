import boto3
import json

dynamoDB = boto3.resource("dynamodb")
table_name = "prjctNotes-DB"
table = dynamoDB.Table(table_name)

def lambda_get_saved(event, ctx):

    url_request_type = event["requestContext"]["http"]["method"]
    
    if url_request_type == "GET":
        
        email = event["queryStringParameters"]["email"]
        
        resp = table.get_item(TableName=table_name, Key={"email": email, "ctx": "saved"})
        
        if "Item" in resp:
            
            return {"saved": resp["Item"]["value"]}
        
        else:
            
            return {"Status Code": 404}

    else:
        
        return {
            "Error": "Incorrect URL Request Type",
            "Want": "GET",
            "Got": url_request_type
        }