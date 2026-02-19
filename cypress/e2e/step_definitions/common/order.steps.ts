import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CartActions } from "@actions/CartActions";
import { PlaceOrderActions } from "@actions/PlaceOrderActions";
import { johnInfo } from "@helpers/objects/CustomerInfo";
import { johnCardInfo } from "@helpers/objects/CardInfo";

const cartActions = new CartActions();
const placeOrderActions = new PlaceOrderActions();

When("places the order", () => {
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
  placeOrderActions.selectConfirmOrder();
});
