console.log("Loading function");
const AWS = require("aws-sdk");
exports.handler = (event, context, callback) => {
  console.log("event= " + JSON.stringify(event));

  const approveEndpoint =
    "add-your-lambda-function-url/?taskToken=" +
    encodeURIComponent(event.TaskToken) +
    "&status=approve";
  console.log("approveEndpoint= " + approveEndpoint);

  const rejectEndpoint =
    "add-your-lambda-function-url/?taskToken=" +
    encodeURIComponent(event.TaskToken) +
    "&status=reject";
  console.log("rejectEndpoint= " + rejectEndpoint);

  const emailSnsTopic =
    "arn:aws:sns:us-west-2:add-you-acctID:Send-Notification";
  console.log("emailSnsTopic= " + emailSnsTopic);

  var emailMessage =
    "This is an email requiring an approval for house tour. \n\n";
  emailMessage +=
    'Please check the following information and click "Approve" link if you want to approve. \n\n';
  emailMessage += `name: ${event.name} \n`;
  emailMessage += `email: ${event.email} \n`;
  emailMessage += `employer: ${event.employer} \n`;
  emailMessage += `Pre-approved: ${event.preapp} \n`;
  emailMessage += "Approve " + approveEndpoint + "\n\n";
  emailMessage += "Reject " + rejectEndpoint + "\n\n";

  const sns = new AWS.SNS();
  var params = {
    Message: emailMessage,
    Subject:
      "Required approval from AWS Step Functions for Application Acceptance",
    TopicArn: emailSnsTopic,
  };

  sns
    .publish(params)
    .promise()
    .then(function (data) {
      console.log("MessageID is " + data.MessageId);
    })
    .catch(function (err) {
      console.error(err, err.stack);
      callback(err);
    });
};
