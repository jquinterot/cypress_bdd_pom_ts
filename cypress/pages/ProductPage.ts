export class ProductPage {
  getProductLabel = (product: string) => cy.get('.name').contains(`${product}`);
  getPriceLabel = (price: string) => cy.contains(`${price}`);
  getAddToCartButton = () => cy.contains(`Add to cart`);
}
