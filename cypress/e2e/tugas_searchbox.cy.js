/// <reference types="cypress" />


describe('Searchbox Test', function () {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('a').contains('Zero - Free Access to Online Banking').click()
        cy.url().should('include', '/online-banking.html')

        cy.get('#searchTerm').type('online {enter}')
        cy.get('a').contains('Zero - Online Statements').click()
        cy.get('h3').should('have.text', 'Log in to ZeroBank')
    });

    // it('Should show search result page', () => {
    //     cy.get('h2').should('contain.text', 'Search Results:')
    //     cy.get('#searchTerm').type('online {enter}')
    //     cy.get('a').contains('Zero - Online Statements').click()
    //     cy.get('h3').should('have.text', 'Log in to ZeroBank')
    // });



});