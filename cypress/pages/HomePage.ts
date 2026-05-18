import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  getNavBarTitle = () => cy.get("#nava").contains("PRODUCT STORE");
  getCategoryItems = (category: string) => cy.contains(`${category}`);
  getProduct = (product: string) => cy.contains(`${product}`);
  getNavbarMenuOption = (menuOption: string) => cy.contains(`${menuOption}`);
}