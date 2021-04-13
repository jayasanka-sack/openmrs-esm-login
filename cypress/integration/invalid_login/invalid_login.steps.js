import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am at the login page", () => {
  cy.visit("/login");
});

When("I type the correct username", () => {
  cy.get("#username").type("admin");
});

When("I hit the continue button", () => {
  cy.contains("Continue").click();
});

When("I type an incorrect password", () => {
  cy.get("#password").type("incorrect_pass");
});

When("I click to log in", () => {
  cy.contains("Log in").click();
});

Then("I should see an error message", () => {
  cy.contains("Incorrect username or password");
});
