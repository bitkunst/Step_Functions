console.log("Loading function");
const aws = require("aws-sdk");

exports.handler = (event, context, callback) => {
  const stepfunctions = new aws.StepFunctions();

  console.log("Callback Function Stuff===", event);

  const taskToken = event.queryStringParameters.taskToken;
  const status = event.queryStringParameters.status;

  const paramsApprove = {
    output: '"Callback task completed successfully."',
    taskToken: taskToken,
  };

  const paramsReject = {
    cause: '"Reject Prospect!."',
    taskToken: taskToken,
  };
  // const responsePositive = {message: "Prospect approved! Adding to the list!" };
  // const responseNegative= {message: "Prospect rejected!" };

  if (status == "approve") {
    stepfunctions.sendTaskSuccess(paramsApprove, (err, data) => {
      if (err) {
        console.error(err.message);
        callback(err.message);
        return;
      }
      console.log(data);
      callback(null);
    });
  } else {
    stepfunctions.sendTaskFailure(paramsReject, (err, data) => {
      if (err) {
        console.error(err.message);
        callback(err.message);
        return;
      }
      console.log(data);
      callback(null);
    });
  }
};
