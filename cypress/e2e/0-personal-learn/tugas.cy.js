/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()

        // Should be on a new URL which include '/commands/action'
        cy.url().should('include', '/commands/action')


        //get an input, type into it and verify that the value has been upload
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });
})