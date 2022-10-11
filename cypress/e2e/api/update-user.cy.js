describe('Update user', () => {
    it('Succes Update', () => {
        var user = {
            "name": "ade saputra",
            "job": "leader"
        }
        
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((Response)=> {
            expect(Response.status).equal(200)
            expect(Response.body.name).to.equal(user.name)
        })
    });
});