///<reference types="cypress" />

describe('Negative response', () => {
    it('Succes Negati', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwok',
            failOnStatusCode: false
        }).as('eduwok')
        cy.get('@eduwok').its('status').should('equal',404)
    });
});