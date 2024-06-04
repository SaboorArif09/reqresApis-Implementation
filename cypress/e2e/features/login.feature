Feature: Login API
  As a user of the API
  I want to be able to login to the API
  So that I can use the API for my application

Scenario: Login with valid credentials
  Given the API is available
  When I send a POST request to "/api/login" with the following data:
    | email         | password |
    | john@example.com | password123 |
  Then the response status code should be 200
  And the response body should be a JSON object
  And the response body should contain a token

Scenario: Login with invalid credentials
  Given the API is available
  When I send a POST request to "/api/login" with the following data:
    | email         | password |
    | invalid        | password123 |
  Then the response status code should be 400
  And the response body should be a JSON object
  And the response body should contain an error message