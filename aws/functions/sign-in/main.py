import boto3
import json

dynamoDB = boto3.resource("dynamodb")
table_name = "prjctNotes-DB"
table = dynamoDB.Table(table_name)

def lambda_sign_in(event, ctx):

    url_request_type = event["requestContext"]["http"]["method"]
    
    if url_request_type == "POST":
        
        data = json.loads(event["body"])
        
        email = data["email"].lower()
        
        password = data["password"]
    
        resp = table.get_item(TableName=table_name, Key={"email": email, "ctx": "password"})

        if "Item" in resp:
            
            emailDB = resp["Item"]["email"]
            passDB = resp["Item"]["password"]
            
            if emailDB == email and passDB == password:
                
                return {"Status Code": 200}
                
            else:
                
                return {"Status Code": 401}
            
        else:
            
            return {"Status Code": 401}
        
        
    else:
        
        return {
            "Error": "Incorrect URL Request Type",
            "Want": "POST",
            "Got": url_request_type
        }