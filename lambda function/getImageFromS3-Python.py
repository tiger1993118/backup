import json
import boto3
import base64

# Get Bytes
client = boto3.client("s3")
resource = boto3.resource("s3")
object = resource.Object("test-upload-bucket1", "Test1.png")

def lambda_handler(event, context):
    
    res = object.get()
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