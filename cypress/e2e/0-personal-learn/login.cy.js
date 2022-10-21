/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name=user_password]').clear()
        cy.get('input[name=user_password]').type('password')

    });


    // INI TUGAS mengaktifkan fitur checkbox keep me signed in
    // it('Should fill Checkbox', () => {
    //     cy.get('input[name="user_remember_me"]').click();
    //     cy.get('[type="checkbox"]').type('checkbox')
    // });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            // Memanggil Commands dari folder support
            cy.login(username, password)

            // cy.get('#user_login').clear()
            // cy.get('#user_login').type(username)
            // cy.get('input[name="user_password"]').clear()
            // cy.get('input[name="user_password"]').type(password)
            // cy.get('[type="submit"]').click()

            //clas menggunakan titik
            // cy.get('.alert-error').should('contains.text', 'Login and/or password are wrong.')

        })
    });
});