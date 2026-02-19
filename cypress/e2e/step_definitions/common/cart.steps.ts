import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductActions } from "@actions/ProductActions";
import { CartActions } from "@actions/CartActions";
import { MenuOptions } from "@helpers/enums/MenuOptions";

const productActions = new ProductActions();
const cartActions = new CartActions();

Given("I visit Demoblaze.com", () => {
  cy.visit("/");
});

When("selects {string} category", (category: string) => {
  cy.selectCategory(category);
});

When("selects {string} product", (product: string) => {
  cy.selectProduct(product);
});

Then("product {string} with price {string} is displayed in product page", (product: string, price: string) => {
  productActions.isAddedProductCorrect(product);
  productActions.isAddedProductPriceCorrect(price);
});

When("adds the product to the cart", () => {
  cy.addToCart();
});

When("goes to cart", () => {
  cy.selectMenuOption(MenuOptions.CART);
});

Then("product {string} is added to cart", (product: string) => {
  cartActions.checkProductIsDisplayed(product);
});

When("deletes product", () => {
  cartActions.deleteProductFromCard();
});

Then("product {string} is deleted", (product: string) => {
  cartActions.isProductDeleted(product);
});
