import { Before, After, BeforeAll, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

AfterAll(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});
