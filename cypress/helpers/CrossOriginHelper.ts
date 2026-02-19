// Cypress 15 Utility: Cross-origin helpers
// Version: 15.10.0
// Purpose: Demonstrates cy.origin() for multi-origin testing

/**
 * Cypress 15: cy.origin() Usage
 * 
 * Use cy.origin() when you need to test multiple domains in a single test.
 * Example use cases:
 * - OAuth flows (login with Google, Facebook, etc.)
 * - Third-party integrations
 * - Multi-domain applications
 * 
 * @example
 * // Single origin call
 * cy.origin('https://external-domain.com', () => {
 *   cy.get('#login').click();
 * });
 * 
 * @example
 * // With credentials passed via args
 * cy.origin('https://auth.example.com', { args: { user: 'test' } }, ({ user }) => {
 *   cy.get('#username').type(user);
 * });
 */

export const CrossOriginHelper = {
  /**
   * Navigate to external domain and perform actions
   * @param url - External domain URL
   * @param callback - Actions to perform on external domain
   */
  visitExternal: (url: string, callback: () => void) => {
    cy.origin(url, callback);
  },

  /**
   * Execute actions on external domain with arguments
   * @param url - External domain URL
   * @param args - Arguments to pass to callback
   * @param callback - Actions to perform
   */
  visitWithArgs: <T extends Record<string, unknown>>(
    url: string, 
    args: T, 
    callback: (args: T) => void
  ) => {
    cy.origin(url, { args }, callback);
  },
};
