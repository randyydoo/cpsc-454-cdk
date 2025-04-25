import json


def main(event, context):
    response = {
    "isBase64Encoded": False,
    "statusCode": 200,
    "headers": {
                  "Access-Control-Allow-Origin" : "http://localhost:3000",
                  'Content-Type': 'application/json',
                },
    "body": json.dumps("Hello from lambda")
}
    return response