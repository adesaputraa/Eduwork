/// <reference types="cypress" />


describe('Navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online bangking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
    });

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });
    

    // INI Tugas Navbar

    it('Should display Account activity ', () => {
        
        cy.get('#online-banking').click()
        cy.get('#account_summary_link').click()

        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

        })

        cy.url().should('include','/bank/account-summary.html')
    });

});