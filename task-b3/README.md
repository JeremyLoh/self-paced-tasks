# Task B3

    Use CD tool for automated deployment to a serverless service

The API is a contacts API that allows for creation, retrieval, updating and deletion of contacts.

Each contact has the following fields: name, email, phone, gender.
The name and email field is compulsory!

The API homepage is deployed at https://0ti1s08yvj.execute-api.ap-southeast-1.amazonaws.com/dev/api/

Travis is used to perform deployment if all tests written for the API pass! The AWS key and secret have been encrypted using Travis and placed as an environment variable.

# References

1. Serverless Framework Quick Start AWS https://www.serverless.com/framework/docs/providers/aws/guide/quick-start/
1. Serverless AWS Credentials setup https://www.serverless.com/framework/docs/providers/aws/guide/credentials/
1. Crash course on serverless aPI with express and mongodb https://dev.to/adnanrahic/a-crash-course-on-serverless-apis-with-express-and-mongodb-193k#accosaweam-1
1. Travis encryption keys: https://docs.travis-ci.com/user/encryption-keys#usage
