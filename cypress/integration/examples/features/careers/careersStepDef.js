import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CareersPage from "../../../../support/pageObjects/CareersPage";
const careersPage = new CareersPage();

Given("I navigate to careers page", () => {
  cy.visit("https://www.embention.com/en/", { timeout: 10000 });
});

When("I enter my email", () => {
  careersPage.emailBx().clear().type(`${Date.now()}@aharotest.com`);
  cy.wait(6000);
});

And("I check the checkbox", () => {
  careersPage.checkBox().click()
});

When("I hit Submit", () => {
  careersPage.submitBtn().click();
});

Then("I see the red confirmation message", () => {
  careersPage.confirmationMsg().should("be.visible");
});
