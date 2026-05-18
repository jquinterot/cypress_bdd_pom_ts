/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      proceedToCart(): Chainable<void>
    }
  }
}

Cypress.Commands.add('proceedToCart', () => {
  cy.contains('Cart').click()
})

export {}