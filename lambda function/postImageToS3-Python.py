import json
import boto3
import base64

client = boto3.client('s3')

def lambda_handler(event, context):
    
    obj = boto3.resource('s3').Object(event['bucket'], event['key'])
    
    #encoded = base64.b64encode(event['body'].encode())
    #body = event['body'].encode('UTF-8')
    
    # decode Base64 String to b'bytes 
    body = base64.b64decode(event['body'])

    print(body)
    '''
    client.put_object(
        Bucket: event['bucket'],
        Key: event['key'],
        Body: body
    )
    '''
    
    obj.put(Body = body)
    return "Sucessfully Uploaded"
