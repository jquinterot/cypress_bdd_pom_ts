import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomeActions } from "../../../actions/HomeActions";
import { ProductActions } from "../../../actions/ProductActions";
import { CartActions } from "../../../actions/CartActions";
import { Categories } from "../../../helpers/enums/Categories";
import { Products } from "../../../helpers/enums/Products";
import { MenuOptions } from "../../../helpers/enums/MenuOptions";

const homeActions = new HomeActions();
const productActions = new ProductActions();
const cartActions = new CartActions();

When("selects Phone category", () => {
  homeActions.selectCategory(Categories.PHONES);
});

When("selects Samsung Galaxy S6 product", () => {
  homeActions.selectProduct(Products.GALAXY_S6);
});

Then("Samsung Galaxy S6 is displayed in product summary page", () => {
  productActions.checkAddedProduct(Products.GALAXY_S6);
  productActions.checkProductPrice();
});

When("adds the Samsung Galaxy S6 to the cart", () => {
  productActions.addToCart();
});

When("goes to cart", () => {
  homeActions.selectMenuOption(MenuOptions.CART);
});

Then("Samsung Galaxy S6 is added to cart", () => {
  cartActions.checkProductIsDisplayed(Products.GALAXY_S6);
});
