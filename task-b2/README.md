# Task B2

Write simple test cases for API and use a CI tool (Travis, etc) to automate testing.

This repo contains a contacts API that allows for the creation, retrieval, updating and deletion of contacts. It runs on localhost.

The API uses Node.js, MongoDB.

Testing is done using [`Mocha` Test Framework](https://mochajs.org/) and [`Chai` Assertion Library](https://www.chaijs.com/). [`chai-http`](https://www.chaijs.com/plugins/chai-http/) plugin is also used for HTTP integration testing.

# Running the API

1. Ensure that [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/try/download/community) are installed
1. Clone this repository at https://github.com/JeremyLoh/self-paced-tasks
1. Open a terminal and navigate to the `task-b2` directory using the `cd` command
1. Run `npm install`. This will install all dependencies required to run the API
1. Run `mongod` on the terminal to start MongoDB
1. Run `nodemon index.js` to start the application

# Running the tests

1. Open a terminal and navigate to the `task-b2` directory using the `cd` command
1. Run `npm install`. This will install all dependencies required to run the API
1. Run `mongod` on the terminal to start MongoDB
1. Run `npx mocha --exit`

# How the API is structured

The database schema contains the following:

1. `name` of type String
1. `email` of type String
1. `gender` of type String
1. `phone` of type String
1. `create_date` of type Object containing a type Date and a default value of `Date.now`

In the database schema, `name` and `email` are compulsory!

There are 3 main URLs for the API:

1. `localhost:8080/api`: this is the root directory of the API and a JSON object will be returned containing a status of `API Homepage` and message of `API is working!`.
1. `localhost:8080/api/contacts`: this route has 2 possible requests (GET and POST). The GET request is used to obtain all contacts that are present in the database. The POST request can be used to create a new contact entry in the database.
1. `localhost:8080/api/contacts/:contact_id`: this route has 4 possible requests (GET, PATCH, PUT, DELETE). The `:contact_id` is a contact id assigned to a contact record in the database. These can be viewed by doing a GET request to `localhost:8080/api/contacts`. The GET request is used to obtain information about the specified contact id record. The PATCH and PUT request is used to update a given contact id record in the database. The DELETE request is used to remove the specified contact id record from the database.

# .travis.yml file for Task B2

If the travis file at the root directory of the repository has been modified (for other tasks), please change the `.travis.yml` file at the root directory of the repository to the following:

```yaml
# For task B
language: node_js
services:
  - mongodb
node_js:
  - 12
before_install: cd task-b2
install:
  - npm install
script:
  - npm run test
```

# Testing on application

There are 6 tests done on the application (in `test/test.js` in the `task-b2` directory):

1. GET request for localhost:8080/api/contacts

   In the `beforeEach` hook, a new contact model is created and the GET request test should return the created contact model. The response is checked for its status and the number of contact entries returned.

1. POST request for localhost:8080/api/contacts

   The test will create a new contact and check if the created contact object returned is matched.

1. GET request for localhost:8080/api/contacts/:contact_id

   The test will obtain the first contact created in the `beforeEach` hook. A GET request to localhost:8080/api/contacts/ is required to obtain the `contact_id` for the first contact. It will then use that `contact_id` and try to perform a GET request to localhost:8080/api/contacts/:contact_id. The returned response is checked for matching values.

1. PATCH request for localhost:8080/api/contacts/:contact_id

   The test will obtain the first contact's `contact_id` created in the `beforeEach` hook. The `contact_id` will be used to update that same contact with new information with a PATCH request. The returned response object will then be checked.

1. PUT request for localhost:8080/api/contacts/:contact_id

   The test will obtain the first contact's `contact_id` created in the `beforeEach` hook. It will then use the `contact_id` to update that same contact with new information with a PUT request. The returned response object will then be checked for matching fields.

1. DELETE request for localhost:8080/api/contacts/:contact_id

   The test will obtain the first contact's `contact_id` created in the `beforeEach` hook. It will then use the `contact_id` to delete that contact from the database with a DELETE request.
