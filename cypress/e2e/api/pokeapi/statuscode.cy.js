///<reference types="cypress" />

describe('Automation API with Pokeapi', () => {
    it('Success validasi content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
    });

    it('Seccuss validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Seccuss validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal',200)
    });
});