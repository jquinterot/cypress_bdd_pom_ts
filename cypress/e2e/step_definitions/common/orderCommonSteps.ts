import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomeActions } from "../../../actions/HomeActions";
import { ProductActions } from "../../../actions/ProductActions";
import { CartActions } from "../../../actions/CartActions";

const homeActions = new HomeActions();
const productActions = new ProductActions();
const cartActions = new CartActions();

Given("I visit Demoblaze.com", () => {
  cy.visit("");
});

When("selects {string} category", (category: string) => {
  homeActions.selectCategory(category);
});

When("selects {string} product", (product:string) => {
  homeActions.selectProduct(product);
});

Then("product {string} is displayed in product page", (product:string) => {
  productActions.checkAddedProduct(product);
  productActions.checkProductPrice();
});

Then("product {string} is added to cart", (product:string) => {
  cartActions.checkProductIsDisplayed(product);
});
