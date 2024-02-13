import { ProductPage } from "../pages/ProductPage";

export class ProductActions {
    private productPage: ProductPage;
  
    constructor() {
      this.productPage = new ProductPage();
    }
  
     checkAddedProduct(product:string) {
       expect(this.productPage.getProductLabel(product).should('have.text', `${product}`));
    }
  
     checkProductPrice() {
       expect(this.productPage.getPriceLabel('$360').should('have.text',`$360 *includes tax`));
    }
  
     addToCart(){
       this.productPage.getAddToCartButton().click();
    }
  }