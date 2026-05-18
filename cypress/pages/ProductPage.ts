import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  getProductLabel = (product: string) => cy.get('.name').contains(`${product}`);
  getPriceLabel = (price: string) => cy.contains(`${price}`);
  getAddToCartButton = () => cy.contains(`Add to cart`);
}