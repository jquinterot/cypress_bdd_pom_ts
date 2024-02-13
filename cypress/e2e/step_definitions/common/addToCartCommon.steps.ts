import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomeActions } from "../../../actions/HomeActions";
import { ProductActions } from "../../../actions/ProductActions";
import { CartActions } from "../../../actions/CartActions";
import { PhonePrices } from "../../../helpers/enums/Products";
import { MenuOptions } from "../../../helpers/enums/MenuOptions";

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

Then("product {string} with price {string} is displayed in product page", (product:string, price:string) => {
  productActions.checkAddedProduct(product);
  productActions.checkProductPrice(price);
});

When("adds the product to the cart", () => {
  productActions.addToCart();
});

When("goes to cart", () => {
  homeActions.selectMenuOption(MenuOptions.CART);
});


Then("product {string} is added to cart", (product:string) => {
  cartActions.checkProductIsDisplayed(product);
});




