Heroku Link - https://potluck-backend-lambda.herokuapp.com

/auth/

Login as a registered user - grants a token upon success - [POST] - /auth/login

Sign up to be a user - [POST] - /auth/sign-up


***NOT FUNCTIONAL
<!-- /api/users

Create a new user - [POST] - api/users/

Get all available users - [GET] - api/users/

Get a specific user - [GET] - api/users/:id

Update a user - [PUT] - api/users/:id

Delete a user - [DELETE] - api/users/:id -->
***NOT FUNCTIONAL


/api/potlucks

Create a new potluck - [POST] - api/potlucks/
-responds with newly created potluck
--Current properties of a potluck:

  {
    "potluck_id": 1,
    "organizer_id": 1,
    "date": "2021-07-28T05:00:00.000Z",
    "time": "17:30:00",
    "street_number": 777,
    "street_name": "Street",
    "state": "CA",
    "zip_code": 99999
  }

Get all available potlucks - [GET] - api/potlucks/

Update a potluck - [PUT] - api/potlucks/:id
--shape of your request body should be as follows:

{
  "date": "2021-07-28T05:00:00.000Z",
  "time": "17:30:00",
  "street_number": 777,
  "street_name": "Street",
  "state": "CA",
  "zip_code": 99999
}

Delete a potluck - [DELETE] - api/potlucks/:id




***TO BE ADDED
Get a specific potluck - [GET] - api/potlucks/:id