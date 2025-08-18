import { BasePage } from './BasePage';
export class CartPage extends BasePage {
    getAddedProductTitle = (product:string) =>  this.getElementByText('tr.success td', `${product}`);
    getDeleteButton = () =>   this.getElementByText('#tbodyid a', `Delete`);
    getPlaceOrderButton = () =>  cy.get('button.btn-success').contains(`Place Order`);
  }