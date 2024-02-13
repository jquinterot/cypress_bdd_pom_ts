import { ProductPage } from "../pages/ProductPage";

export class ProductActions {
    private productPage: ProductPage;
  
    constructor() {
      this.productPage = new ProductPage();
    }
  
     checkAddedProduct(product:string) {
       expect(this.productPage.getProductLabel(product).should('have.text', `${product}`));
    }
  
     checkProductPrice(price:string) {
       expect(this.productPage.getPriceLabel(`$${price}`).should('have.text',`$${price} *includes tax`));
    }
  
     addToCart(){
       this.productPage.getAddToCartButton().click();
    }
  }