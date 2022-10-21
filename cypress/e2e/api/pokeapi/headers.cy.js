describe('Validasi header', () => {
    it('Success validasi content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
    });


    // TUGAS Tambahkan assertion berdasarkan body yang didapat (bukan headers) 
it('Success validasi Assertion body', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').then((Response)=>{
        expect(Response.body.abilities[0].ability.name).equal("limber")
        expect(Response.body.abilities[0].ability.url).equal( "https://pokeapi.co/api/v2/ability/7/")
    })

    // it("Get Respone Body", () => {
    //     var poke ={
    //         "name": "limber"
    //     }
    //     cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto',poke).then((response)=>{
    //         expect(response.status).equal(200)
    //         expect(response.body.abilities[0].ability.name).to.eq(poke.name)
    //     })
    // });
    
});
});