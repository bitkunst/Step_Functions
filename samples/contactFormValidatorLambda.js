exports.handler = async (event) => {
  console.log("validate data function");
  console.log(event);

  if (event.name && event.email && event.message) {
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
   * input:
   *  {
    "name": "Gina",
    "email": "me@gmail.com",
    "message": "can I buy your house?"
  }

  // Dynamo API parameter:

  {
  "TableName": "add name here",
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
    "message": {
      "S.$": "$.message"
    }
  }
}
   */

 /**
   {
    "name": "Gina",
    "email": "me@gmail.com",
    "address": "123 suldaido ave",
    "preapp": true,
    "employer": "Google, Inc"
  }
//output
  {
  "name": "Gina",
  "email": "me@gmail.com",
  "address": "123 suldaido ave",
  "preapp": true,
  "employer": "Google, Inc",
  "Payload": {
    "validated": true
  }
}
 */