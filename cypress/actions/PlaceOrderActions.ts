import { PlaceOrderPage } from '../pages/PlaceOrderPage';


export class PlaceOrderActions {
  private placeOrderPage: PlaceOrderPage;

  constructor() {
    this.placeOrderPage = new PlaceOrderPage();
  }

   fillName(name:string) {
     this.placeOrderPage.getNameInput().type(name);
  }

   fillCountry(country:string) {
     this.placeOrderPage.getCountryInput().type(country);
  }

   fillCity(city:string) {
     this.placeOrderPage.getCityInput().type(city);
  }

   fillCard(cardNumber:string) {
     this.placeOrderPage.getCardInput().type(cardNumber);
  }

   fillMonth(month:string) {
     this.placeOrderPage.getMonthInput().type(month);
  }

   fillYear(year:string) {
     this.placeOrderPage.getYearInput().type(year);
  }

   selectPurchase(){
     this.placeOrderPage.getPurchaseButton().click();
  }

   isThankYouMessageIsDisplayed(){
     expect(this.placeOrderPage.getThankYouLabel().should('be.visible'));
  }
}