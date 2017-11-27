const AWS = require('aws-sdk');
const SNS = new AWS.SNS();

function snsPublisher() {
    console.log('Starting function');

    SNS.publish({
        Message: 'Test publish to SNS from Lambda',
        TopicArn: 'arn:aws:sns:us-west-2:657315558120:MannyTopicName'
    }, function(err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log('push sent');
        console.log(data);
    });
};

module.exports = {
  snsPublisher: snsPublisher
};
