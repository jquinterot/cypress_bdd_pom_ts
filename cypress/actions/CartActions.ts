import { CartPage } from "../pages/CartPage";

export class CartActions {
  private cartPage: CartPage;

  constructor() {
    this.cartPage = new CartPage();
  }

  checkProductIsDisplayed(product: string) {
    expect(
      this.cartPage.getAddedProductTitle(product).should("have.text", product)
    );
  }

  deleteProductFromCard(product: string) {
    this.cartPage.getDeleteButton().click();
    cy.reload();
    this.cartPage.getAddedProductTitle(product).should('not.exist');
  
  }

  selectPlaceOrder() {
    this.cartPage.getPlaceOrderButton().click();
  }
}
