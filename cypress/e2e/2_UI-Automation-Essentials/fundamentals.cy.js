// CYPRESS FUNDAMENTALS GUIDEBOOK
 /* Purpose: A comprehensive guide for essential Cypress commands and test structures.
  Hierarchy Legend:
    - describe: Test Suite (The main topic)
    - context: Grouping (Sub-topics/Categories)
    - it: Test Case (Individual scenarios)

    example;

  context('Login Scenarios', () => { // Group

  it('TC01: Should login with valid credentials', () => { // TEST CASE
    // Steps are actions within an it block:
    cy.get('#user').type('muge'); // Step 1
    cy.get('#pass').type('123');  // Step 2
    cy.get('#btn').click();       // Step 3
  });
});     
  */

describe('TS1: Cypress Core Fundamentals', () => {

 // Global setup: Runs before each test case
    beforeEach(() => {
        cy.visit("https://www.edu.goit.global/account/login");
    });

    context('1. Navigation & URL Validation', () => {
        
        it('TC01: Should verify page loading and URL structure', () => {
            // .url() retrieves the current URL of the page
            cy.url().should('include', 'goit.global');
        });

        it('TC02: Should demonstrate page title validation', () => {
            // .title() retrieves the document.title property
            cy.title().should('include', 'Log in');
        });
    });

    context('2. Element Interaction & Aliasing', () => {

        it('TC03: Should handle input fields with alias and clear', () => {
            // .get() is the primary command to locate elements in the DOM
            // .as() creates an alias (nickname) for later use
            cy.get('#user_email').as('emailField');

            // Using alias with '@' symbol
            cy.get('@emailField')
                .clear() // Deletes existing text
                .type('muge@example.com'); // Simulates keystrokes

            cy.get('[name="password"]').type('123456');
        });

        it('TC04: Should demonstrate various mouse click actions', () => {
            const loginButton = '.next-1jphuq5';

            cy.get(loginButton).click(); // Standard left click
            // cy.get(loginButton).dblclick(); // Double click
            // cy.get(loginButton).rightclick(); // Right click
        });
    });

    context('3. Assertions (Should & And)', () => {

        it('TC05: Should perform multiple validations on a single element', () => {
            // Chaining assertions using .should() and .and()
            cy.get('.eckniwg2')
                .should('have.text', 'Log in')
                .and('be.visible')
                .and('exist')
                .and('have.css', 'background-color', 'rgb(255, 107, 10)');
        });

        it('TC06: Should verify element states (checkboxes/buttons)', () => {
            // Examples of state assertions:
            // cy.get('input').should('not.be.disabled');
            // cy.get('[type="checkbox"]').check().should('be.checked');
        });
    });

    context('4. Advanced Interactions & Viewport', () => {

        it('TC07: Should handle mouse events and scrolling', () => {
            // Using .trigger() as a workaround for hover effects
            cy.get('.next-128fs2v > .next-1qrvie4').trigger('mouseenter');

            // Scrolling to specific elements or positions
            cy.get('.next-1jphuq5').scrollIntoView();
            cy.scrollTo('bottom');
        });

        it('TC08: Should capture visual evidence (Screenshots)', () => {
            // Full page screenshot
            cy.screenshot('full-page-capture');
            
            // Specific element screenshot
            cy.get('#user_password').screenshot('password-field-only');
        });
    });
});