import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


Then("I should see a search bar", () => {
  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/
    );

  assert.deepEqual({}, {});
});