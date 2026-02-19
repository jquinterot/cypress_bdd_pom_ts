/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      selectCategory(category: string): Chainable<void>
      selectProduct(product: string): Chainable<void>
      selectMenuOption(option: string): Chainable<void>
      addToCart(): Chainable<void>
      proceedToCart(): Chainable<void>
      placeOrder(customer: CustomerData, card: CardData): Chainable<void>
    }
  }
}

interface CustomerData {
  name: string
  city: string
  country: string
}

interface CardData {
  number: string
  month: string
  year: string
}

Cypress.Commands.add('selectCategory', (category: string) => {
  cy.contains(category).click()
})

Cypress.Commands.add('selectProduct', (product: string) => {
  cy.contains(product).click()
})

Cypress.Commands.add('selectMenuOption', (option: string) => {
  cy.contains(option).click()
})

Cypress.Commands.add('addToCart', () => {
  cy.contains('Add to cart').click()
  cy.on('window:alert', () => true)
})

Cypress.Commands.add('proceedToCart', () => {
  cy.contains('Cart').click()
})

Cypress.Commands.add('placeOrder', (customer: CustomerData, card: CardData) => {
  cy.contains('Place Order').click()
  cy.get('#name').type(customer.name)
  cy.get('#country').type(customer.country)
  cy.get('#city').type(customer.city)
  cy.get('#card').type(card.number)
  cy.get('#month').type(card.month)
  cy.get('#year').type(card.year)
  cy.contains('Purchase').click()
  cy.contains('Thank you for your purchase!').should('be.visible')
  cy.get('.confirm').contains('OK').click()
})

export {}
