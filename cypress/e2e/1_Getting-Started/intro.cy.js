/**
 * SMOKE TEST: Environment Verification
 * Purpose: To ensure Cypress is correctly installed and can interact with a browser.
 */

describe('Cypress Readiness Check', () => {
    
    it('TC00 - Should successfully load a webpage', () => {
        // We use Google as a neutral target to verify connectivity
        cy.visit('https://www.google.com');
        
        // Assert that the page contains the expected title
        cy.title().should('include', 'Google');
        
        cy.log('Environment is Ready! 🚀');
    });

    context('Configuration Check', () => {
        it('Should verify Cypress internal configurations', () => {
            // Logging the browser details to the Cypress console
            const browserName = Cypress.browser.name;
            cy.log(`Tests are running on: ${browserName}`);
        });
    });
});