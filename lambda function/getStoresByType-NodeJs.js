const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log("YEAH YEAH YEAH");
    
    var table = "Stores";

    var params = {
        TableName: table,
        ExpressionAttributeNames: {
            "#t": "Type",
        },
          ExpressionAttributeValues: {
            ":a": {
                S: "Rice Noodle"
            }
        },
        FilterExpression: "#t = :a" 
    };
    
    ddb.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(null, data);
        }
    });
};
