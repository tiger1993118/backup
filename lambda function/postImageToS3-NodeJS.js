const AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
    
    let image = event.body;
    let name = event.name;
    
    //console.log(image);
    
    let buffer = Buffer.from(image, 'base64');
    //console.log(buffer)
    
    
    let params = {
        Bucket: 'test-upload-bucket1',
        Key: name,
        Body: buffer
    }
    
    s3.putObject(params, function(err, data) {
        if(err) {
        callback(err, null);
        } 
        console.log("Successfully uploaded");
        callback(null, "Successfully Upload Image");
    });
};
