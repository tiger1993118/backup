import json
import boto3
import base64

# Get Bytes
client = boto3.client("s3")
resource = boto3.resource("s3")

def lambda_handler(event, context):
    
    object = resource.Object("test-upload-bucket1", event["name"])
    res = object.get()
    
    #convertion
    bytes_res = base64.b64encode(res['Body'].read())
    ret = str(bytes_res, 'utf-8')
    print(ret)
    
    '''
    res = client.get_object(
        Bucket='test-upload-bucket1',
        Key='StLouis.png',
        ResponseContentEncoding='base64'
    )
    
    print(res)
    print(res['Body'].read())
    '''


    return {
        "body": ret
    }