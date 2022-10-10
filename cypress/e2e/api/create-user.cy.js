describe('Create New User', () => {
    it('Success', () => {
        var user = {
            "name": "ade saputra",
            "job": "leader"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((Response)=> {
            expect(Response.status).equal(201)

            // TUGAS memastikan data yang disimpan bener-bener tersimpan
            expect(Response.body["name"]).equal(user.name)
            expect(Response.body["job"]).equal(user.job)
        })
    });
});