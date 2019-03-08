const AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
    
    let key = event.name;
    
    let params = {
        Bucket: 'test-upload-bucket1',
        Key: key
    }
    
    s3.getObject(params, function(err, data) {
        if(err) {
           callback(err, null);
        } else {
            
            //console.log(data);
            //console.log(data.Body)
            // console.log(data.Body.toString('base64'));
            
            let base64 = data.Body.toString('base64');
            
            //console.log(base64);
            
            callback(null, base64);
       }
    });
};
