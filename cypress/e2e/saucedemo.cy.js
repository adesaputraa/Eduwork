/// <reference types="cypress" />


describe('Login & Logout saucedemo', () => {

    it('website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
      

        
    });


    it('Should username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('dgdgd')
    });

    it('Shold password', () => {
        cy.get('input[name=password]').clear()
        cy.get('input[name=password]').type('dgdgdgd')
    });

    it('Should login to application with valid data (Positif test)', () => {
        cy.fixture("use").then(use => {
            const username = use.username
            const password = use.password

            //jika id memakai tanda #(crash)
            //jika class memakai tanda .(titik)
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.url().should('include', 'inventory.html')
        })
    });
});

