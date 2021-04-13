Feature: Invalid Login
  Login with incorrect password

  Scenario: Log in successful
    Given I am at the login page
    When I type the correct username
    And I hit the continue button
    And I type an incorrect password
    And I click to log in
    Then I should see an error message
