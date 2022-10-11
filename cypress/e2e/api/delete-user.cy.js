describe('Delete user', () => {
    it('Success Delete User', () => {
       
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((Response)=> {
            expect(Response.status).equal(204)
        })
    });
});