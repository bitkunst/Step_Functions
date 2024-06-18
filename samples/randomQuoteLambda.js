//Simple lambda + step function integration:
//https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html

/**
 * 
 * Important:
 *   must edit the IAM role ARN and change the
 * access policy from this (Resources):
 *    "arn:aws:lambda:us-west-2:371636523863:function:showRandomQuote:*"
 * 
 * to:
 * "*"
 * 
 * or just add the new function arn:
 * arn:aws:lambda:us-west-2:371636523863:function:addAuthor:*,
 * arn:aws:lambda:us-west-2:371636523863:function:showRandomQuote:*
 * 
 */

exports.handler = async (event) => {
  const list = ["Serverless is great!",
   "Step Functions and Lambdas - even better!", 
   "This is the future!"];
 

  //return a random int between event.seed to
  var seed = event.seed;
  var multi = event.multi;

  var ranQuote = Math.floor(Math.random() * multi) + seed;
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Quote: " + list[ranQuote] + "!"),
  };
  return response;
};





//input

// {
//   "seed": 0,
//   "multi": 2
// }

/**
 *     "ResultSelector": {
      "statusCode.$": "$.Payload.statusCode",
      "body.$": "$.Payload.body"
  },
 */
/**
 * 
 *{
  "name": "Pass",
  "output": {
    "lambdaResult": {
      "ExecutedVersion": "34",
      "Payload": {
        "statusCode": 200,
        "body": "Quote: Step Functions and Lambdas - even better!!"
      }
    }
  }
}
 */