Feature: Login
  Login with correct credentials

  Scenario: Log in successful
    Given I am at the login page
    When I type the correct username
    And I hit the continue button
    And I type the correct password
    And I click to log in
    And I wait for 3 seconds
    And I pick location Pharmacy
    And I click continue
    Then I should be on the home page
