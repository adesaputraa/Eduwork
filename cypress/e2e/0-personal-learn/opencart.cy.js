/// <reference types="cypress" />

describe('Tugas Fixtures & Static Data', () => {

    it('Visit the website', () => {
        cy.visit('https://demo.opencart.com/')
    });

    it('Visit the website Register', () => {
        // register
        cy.contains('My Account').click()
        cy.contains('Register').click()
    });

    it('Visit the website Login', () => {
        // Login
        cy.contains('My Account').click()
        cy.contains('Login').click()
    });

    it('Visit the Desktops', () => {
        // Desktops
        cy.contains('Desktops').click()
        cy.contains('PC (0)').click()
    });


});

