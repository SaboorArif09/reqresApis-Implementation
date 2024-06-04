Feature: Users API
  As a user of the API
  I want to be able to retrieve and manipulate user data
  So that I can use the API for my application

Scenario: Get a list of users
  Given the API is available
  When I send a GET request to "/api/users"
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response body should contain a list of users

Scenario: Get a single user
  Given the API is available
  When I send a GET request to "/api/users/2"
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response body should contain the user with id 2

Scenario: Get a single user that does not exist
  Given the API is available
  When I send a GET request to "/api/users/100"
  Then the response status code should be 404
  And the response body should be a JSON object
  And the response body should contain an error message

Scenario: Create a new user
  Given the API is available
  When I send a POST request to "/api/users" with the following data:
    | name  | job    |
    | John  | Leader |
  Then the response status code should be 201
  And the response body should be a JSON object
  And the response body should contain the newly created user

Scenario: Update an existing user
  Given the API is available
  When I send a PUT request to "/api/users/2" with the following data:
    | name  | job    |
    | Jane  | Manager|
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response body should contain the updated user

Scenario: Delete a user
  Given the API is available
  When I send a DELETE request to "/api/users/2"
  Then the response status code should be 204
  And the response body should be empty

Scenario: Get users with delay
  Given the API is available
  When I send a GET request to "https://reqres.in/api/users?delay=3"
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response should be delayed by 3 seconds