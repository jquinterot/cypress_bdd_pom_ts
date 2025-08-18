export class PlaceOrderPage {
  getTotalInput = () => cy.get('#totalm');
  getNameInput = () => cy.get('#name');
  getCountryInput = () => cy.get('#country');
  getCityInput = () => cy.get('#city');
  getCardInput = () => cy.get('#card');
  getMonthInput = () => cy.get('#month');
  getYearInput = () => cy.get('#year');
  getPurchaseButton = () => cy.contains('Purchase');
  getThankYouLabel = () => cy.contains('Thank you for your purchase!');
  getConfirmOrderButton = () => cy.get('.confirm').contains(`OK`);
}
