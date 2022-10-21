/// <reference types="cypress" />

describe('Tugas Fixtures & Static Data', () => {

    it('Visit the website', () => {
        cy.visit('http://automationpractice.com/')
    });

    it('Visit the website Login', () => {
        // Login
        cy.contains('Sign in').click()
    });

});

