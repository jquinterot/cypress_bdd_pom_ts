import { ProductPage } from "../pages/ProductPage";

export class ProductActions {
    private productPage: ProductPage;
  
    constructor() {
      this.productPage = new ProductPage();
    }
  
     isAddedProductCorrect(product:string) {
       expect(this.productPage.getProductLabel(product).should('contain.text', `${product}`));
    }
  
     isAddedProductPriceCorrect(price:string) {
       expect(this.productPage.getPriceLabel(`$${price}`).should('contain.text',`$${price} *includes tax`));
    }
  
     addToCart(){
       this.productPage.getAddToCartButton().click();
    }
  }