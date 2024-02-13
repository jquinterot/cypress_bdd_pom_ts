import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomeActions } from "../../../actions/HomeActions";
import { ProductActions } from "../../../actions/ProductActions";
import { CartActions } from "../../../actions/CartActions";
import { Categories } from "../../../helpers/enums/Categories";
import { Products } from "../../../helpers/enums/Products";
import { MenuOptions } from "../../../helpers/enums/MenuOptions";
import { PlaceOrderActions } from '../../../actions/PlaceOrderActions';
import { johnInfo } from "../../../helpers/objects/CustoemrInfo";
import { johnCardInfo } from "../../../helpers/objects/CardInfo";

const homeActions = new HomeActions();
const productActions = new ProductActions();
const cartActions = new CartActions();
const placeOrderActions = new PlaceOrderActions();

When("places the order", () => {
    cartActions.deleteProductFromCard(Products.GALAXY_S6);
    cartActions.selectPlaceOrder();

    placeOrderActions.fillName(johnInfo.name);
    placeOrderActions.fillCountry(johnInfo.country);
    placeOrderActions.fillCity(johnInfo.city);
    placeOrderActions.fillCard(johnCardInfo.number);
    placeOrderActions.fillMonth(johnCardInfo.month);
    placeOrderActions.fillYear(johnCardInfo.year);
    placeOrderActions.selectPurchase();
    
});

Then("thank you message is displayed", () => {
    placeOrderActions.isThankYouMessageIsDisplayed();
  });