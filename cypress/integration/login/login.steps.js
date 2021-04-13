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

When("I type the correct password", () => {
  cy.get("#password").type("Admin123");
});

When("I click to log in", () => {
  cy.contains("Log in").click();
});

When("I pick location Pharmacy", () => {
  cy.contains("Pharmacy").click();
});

When("I wait for 3 seconds", () => {
  cy.wait(3000);
});
When("I pick location Pharmacy", () => {
  cy.contains("Pharmacy").click();
});

When("I click continue", () => {
  cy.get('button[type="submit"]').click();
});

Then("I should be on the home page", () => {
  cy.url().should("include", "/home");
});
