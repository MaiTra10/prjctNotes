import boto3
import json

dynamoDB = boto3.resource("dynamodb")
table_name = "prjctNotes-DB"
table = dynamoDB.Table(table_name)

def lambda_sign_up(event, ctx):

    url_request_type = event["requestContext"]["http"]["method"]
    
    if url_request_type == "POST":
        
        data = json.loads(event["body"])
        
        email = data["email"]
        
        password = data["password"]

        resp = table.get_item(TableName=table_name, Key={"email": email, "ctx": "password"})

        if "Item" in resp:
            
            return {"Status Code": 409}
            
        else:
        
            return table.put_item(TableName=table_name, Item={"email": email, "ctx": "password", "password": password})
        
    else:
        
        return {
            "Error": "Incorrect URL Request Type",
            "Want": "POST",
            "Got": url_request_type
        }