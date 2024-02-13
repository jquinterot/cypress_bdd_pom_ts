import { When } from "@badeball/cypress-cucumber-preprocessor";
import { HomeActions } from "../../../actions/HomeActions";
import { ProductActions } from "../../../actions/ProductActions";
import { MenuOptions } from "../../../helpers/enums/MenuOptions";

const homeActions = new HomeActions();
const productActions = new ProductActions();

When("adds the product to the cart", () => {
  productActions.addToCart();
});

When("goes to cart", () => {
  homeActions.selectMenuOption(MenuOptions.CART);
});
