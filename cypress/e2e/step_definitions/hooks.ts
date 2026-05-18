import { BeforeAll, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});

AfterAll(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});
