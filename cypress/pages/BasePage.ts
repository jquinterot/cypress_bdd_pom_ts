export class BasePage {
  visit(path: string = '') {
    cy.visit(path);
  }

  click(selector: string, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible').click();
  }

  type(selector: string, text: string, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible').clear().type(text);
  }

  contains(selector: string, text: string) {
    return cy.contains(selector, text);
  }

  get(selector: string) {
    return cy.get(selector);
  }

  shouldContain(selector: string, text: string, timeout = 10000) {
    cy.get(selector, { timeout }).should('contain.text', text);
  }

  shouldBeVisible(selector: string, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible');
  }

  shouldNotExist(selector: string, timeout = 10000) {
    cy.get(selector, { timeout }).should('not.exist');
  }

  waitAndClick(selector: string, timeout = 15000) {
    cy.wait(100);
    cy.get(selector, { timeout }).then(($el) => {
      if ($el.is(':visible')) {
        $el.click();
      } else {
        cy.wait(200).then(() => $el.click());
      }
    });
  }

  reload() {
    cy.reload();
  }
}