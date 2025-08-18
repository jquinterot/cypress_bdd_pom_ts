export class BasePage {
  // Common method to visit a URL
  visit(url: string) {
    cy.visit(url);
  }

  // Common method to get an element by text
  getElementByText(selector: string, text: string) {
    return cy.contains(selector, text);
  }

  // Common method to get an element by selector
  getElement(selector: string) {
    return cy.get(selector);
  }

  // Common method to click an element
  clickElement(selector: string) {
    this.getElement(selector).click();
  }

  // Common method to type into an input field
  typeIntoField(selector: string, text: string) {
    this.getElement(selector).type(text);
  }

  // Common method to assert that an element contains text
  assertElementContainsText(selector: string, text: string) {
    this.getElement(selector).should('contain.text', text);
  }
}
