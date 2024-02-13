import { HomePage } from "../pages/HomePage";

export class HomeActions {
  private homePage: HomePage;
  constructor() {
    this.homePage = new HomePage();
  }

  checkHomePageTitle() {
    expect(
      cy.title().should("eq", "STORE")
    );
  }

  verifyHomePageNavbarTitle() {
    expect(
      this.homePage.getNavBarTitle().should("contains.text", "PRODUCT STORE")
    );
  }

  selectCategory(category: string) {
    this.homePage.getCategoryItems(category).click();
  }

  selectProduct(product: string) {
    this.homePage.getProduct(product).click();
  }

  selectMenuOption(menuOption: string) {
    this.homePage.getNavbarMenuOption(menuOption).click();
  }
}
