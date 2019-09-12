'use strict'

const AWS = require('aws-sdk')
const uuid = require('uuid')

const docClient = new AWS.DynamoDB.DocumentClient()
const groupsTable = process.env.GROUPS_TABLE

// this is a post request because we are saving information to database
exports.handler = async (event) => {
  console.log('Processing event: ', event)
  
  // generate random id for dynambodb partition key
  const itemId = uuid.v4()

  // represents new group to create
  const parsedBody = JSON.parse(event.body)

  // write an item to dynambodb format
  const newItem = {
    id: itemId, // generated random id
    ...parsedBody // takes all parameters from user request (this is shortcut, currently accepts all variables/parameters from user)
  }

  // put item in dynambodb table
  await docClient.put({
    TableName: groupsTable,
    Item: newItem
  }).promise()

  // return http reply after done saving

  const res = {
    "statusCode": 201,
    "headers": {
        "Access-Control-Allow-Origin": "*"
    }
  };
  res.body = JSON.stringify({ newItem });
  return res;

  // return {
  //   statusCode: 201,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   body: JSON.stringify({
  //     newItem
  //   })
  // }

  /**
   * after that download all dependencies >> npm install
   * and then pack into a zip package >> zip -r dynamodb-create.zip .
   * create function on aws lambda page
   * then upload created zip file and then save
   * provide name of table at environmental variables on lambda func and then save
   * update execution role policy on aws func to write to table (policy file is called iam-policy.json) and then save
   * go to api gateway and create new method (in this case it is post)
   * check lambda proxy box
   * integrate the lambda function created and then save
   * deploy to same stage
   */
}
