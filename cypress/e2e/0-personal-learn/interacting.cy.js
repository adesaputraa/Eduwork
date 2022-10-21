/// <reference types="cypress" />

describe('Browser', () => {
    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
    });

    it('Should clik on Travel Category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    });
});