// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.fixture('users').then((data) => {
        cy.visit('/');
        cy.get('.layui-layer-setwin').click();
        cy.get('.headUser_linkLogin').trigger('mouseover');
        cy.get('.headUser_btnLogin').click();
        cy.get('#email').type(data.email);
        cy.get('#password').type(data.password);
        cy.get('#js-btnSubmit').click();
    });
});