Feature: Register API
  As a user of the API
  I want to be able to register a new user
  So that I can use the API for my application

Scenario: Register a new user
  Given the API is available
  When I send a POST request to "/api/register" with the following data:
    | email         | password |
    | john@example.com | password123 |
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response body should contain a token

Scenario: Register a new user with invalid data
  Given the API is available
  When I send a POST request to "/api/register" with the following data:
    | email         | password |
    | invalid        | password123 |
  Then the response status code should be 400
  And the response body should be a JSON object
  And the response body should contain an error message