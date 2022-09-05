/// <reference types="cypress" />

const faker = require('faker');

before(() => {
    cy.visit('index.php?controller=authentication&back=my-account')
});

describe('Cadastro de novo usuário', () => {
    const  user = { email: faker.internet.email(),
        name: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
        }}
    it('Cadastrando novo e-mail válid', () => {
        cy.get('#email_create').type(user.email)
        cy.get('#SubmitCreate').click()
    });
    
    it('Criando login de usuário com sucesso', () => {
              
        //POST 200 /index.php
        // cy.server()
        // cy.route('POST','**/index').as('index');
        // cy.wait('@index.php')
      
    
        cy.get('[type="radio"]').first().check()
        cy.get('#customer_firstname').type(user.name.firstName)
    
    }); 
});

