import json


def main(event, context):
    payload = json.loads(event["body"])
    response = {
    'statusCode': 200,
    "headers": {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ["http://localhost:3000"],
  },
    'body': json.dumps("Hello from Lambda")
    }
    return response