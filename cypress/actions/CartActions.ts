import { CartPage } from "../pages/CartPage";

export class CartActions {
  private cartPage: CartPage;

  constructor() {
    this.cartPage = new CartPage();
  }

  checkProductIsDisplayed(product: string) {
    this.cartPage.getAddedProductTitle(product).should('contain.text', product);
  }

  deleteProductFromCard() {
    this.cartPage.getDeleteButton().click();
  }

  isProductDeleted(product: string) {
    cy.reload();
    this.cartPage.getAddedProductTitle(product).should('not.exist');
  }

  selectPlaceOrder() {
    this.cartPage.getPlaceOrderButton().click();
  }
}
