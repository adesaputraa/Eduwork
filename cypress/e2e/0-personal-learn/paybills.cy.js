/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });


    it('click sign in and navigate to Pay Bills', () => {

        cy.get('input[type="submit"]').click()

        cy.get('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
    })

    it('input data for payment', () => {
        cy.paybills()
    })

});