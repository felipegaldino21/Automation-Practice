/// <reference types="cypress" />

const faker = require('faker')

beforeEach(() => {
    cy.visit('index.php?controller=authentication&back=my-account')
});

it('Criando login de usuário com sucesso', () => {
    cy.get('#SubmitCreate').click()
    

    
});