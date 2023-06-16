import boto3
import json

dynamoDB = boto3.resource("dynamodb")
table_name = "prjctNotes-DB"
table = dynamoDB.Table(table_name)

def lambda_save(event, ctx):

    url_request_type = event["requestContext"]["http"]["method"]
    
    if url_request_type == "POST":
        
        data = json.loads(event["body"])
        
        email = data["email"].lower()
        
        notes = data["notes"]

        table.put_item(TableName=table_name, Item={"email": email, "ctx": "saved", "value": notes})
        
        return {"Status Code": 200}

    else:
        
        return {
            "Error": "Incorrect URL Request Type",
            "Want": "POST",
            "Got": url_request_type
        }