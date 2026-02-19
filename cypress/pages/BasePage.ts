export class BasePage {
  visit(path: string = '') {
    cy.visit(path);
  }

  click(selector: string) {
    cy.get(selector).click();
  }

  type(selector: string, text: string) {
    cy.get(selector).clear().type(text);
  }

  contains(selector: string, text: string) {
    return cy.contains(selector, text);
  }

  get(selector: string) {
    return cy.get(selector);
  }

  shouldContain(selector: string, text: string) {
    cy.get(selector).should('contain.text', text);
  }

  shouldBeVisible(selector: string) {
    cy.get(selector).should('be.visible');
  }

  shouldNotExist(selector: string) {
    cy.get(selector).should('not.exist');
  }

  reload() {
    cy.reload();
  }
}
