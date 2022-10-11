///<reference types="cypress" />

describe('Validasi Content', () => {
    it('Success validasi content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    });


    // Tugas Validasi Content
    it('Validasi Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('bulb')
        cy.get('@bulb').then((Response)=>{
            
            expect(Response.body.abilities[0].ability.name).to.eq("limber")
            expect(Response.body.abilities[0].ability.url).to.eq( "https://pokeapi.co/api/v2/ability/7/")
        })
        
    });

});