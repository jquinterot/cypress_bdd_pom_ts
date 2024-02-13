export class CartPage {
    getAddedProductTitle = (product:string) => cy.contains('tr.success td', `${product}`);
    getDeleteButton = () =>  cy.contains('Delete');
    getPlaceOrderButton = () =>  cy.get('button.btn-success').contains(`Place Order`);
  }