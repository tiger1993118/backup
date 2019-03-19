const AWS = require("aws-sdk");
const ddbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    
    // Parameters
    var params = {
        TableName: "Stores",
        Key: {
            "Id": event.Id
        }
    }
    
    // Get Store
    ddbClient.get(params, function(err, data) {
        if(err) callback(err, null);
        else {
            callback(null, data);
        }
    })
    

    
};
