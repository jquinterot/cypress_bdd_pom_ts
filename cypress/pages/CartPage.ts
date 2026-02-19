import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  getAddedProductTitle = (product: string) => this.contains('tr.success td', product);
  getDeleteButton = () => this.contains('#tbodyid a', 'Delete');
  getPlaceOrderButton = () => cy.get('button.btn-success').contains('Place Order');
}
