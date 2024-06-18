exports.handler = async (event) => {
  console.log("validate data function");
  console.log(event);

  if (
    event.name &&
    event.email &&
    event.address &&
    event.preapp &&
    event.employer
  ) {
    return {
      validated: true,
    };
  } else {
    return {
      validated: false,
    };
  }
};
/**
 * {
  "TableName": "add_table_name",
  "Item": {
    "id": { 
      "S.$": "$.name"
    },
    "name": {
      "S.$": "$.name"
    },
    "email": {
      "S.$": "$.email"
    },
    "address": {
      "S.$": "$.address"
    },
    "preapp": {
      "S.$": "$.preapp"
    },
    "employer": {
      "S.$": "$.employer"
    }
  }
}
 */

/**
 * 
 * 
 * {
  "name": "James",
  "email": "me@gmail.com",
  "address": "1342 south Hill",
  "preapp": "true",
  "employer": "Google, Inc"
}
 */

/**
 * Mapping template:
 *  #set($data = $util.escapeJavaScript($input.json('$')))
    {
        "input": "$data",
        "stateMachineArn": "arn:aws:states:us-west-2:453444:stateMachine:YourStateMachine" 
    }

    Headers:
    X-Amz-Target -> 'AWSStepFunctions.StartExecution'
Content-Type -> 'application/x-amz-json-1.0'
 */
