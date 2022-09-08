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
    it('Cadastrando novo e-mail válido', () => {
        cy.get('#email_create').type(user.email);
        cy.get('#SubmitCreate').click();
    });
    
    it('Criando login de usuário com sucesso', () => {
        cy.url().should('include' , '#account-creation');
        cy.get('#email').should('have.value' , user.email);
        //POST 200 /index.php
        // cy.server()
        // cy.route('POST','**/index').as('index');
        // cy.wait('@index.php')

        cy.get('[type="radio"]').first().check();
        cy.get('#customer_firstname').type(user.name.firstName);
        cy.get('#customer_lastname').type(user.name.lastName);
        cy.get('#passwd').type(faker.internet.password());
        cy.get('#days').select(`${faker.datatype.number({min: 1,  max: 31})}`);
        cy.get('#months').select(`${faker.datatype.number({min: 1,  max: 12})}`);
        cy.get('#years').select(`${faker.datatype.number({min: 1950,  max: 2004})}`);
        cy.get('#company').type(faker.company.companyName());
        cy.get('#address1').type(faker.address.streetAddress());
        cy.get('#address2').type(faker.address.secondaryAddress());
        cy.get('#city').type(faker.address.cityName());
        cy.get('#id_state').select(faker.address.state());
        cy.get('#postcode').type(faker.address.zipCode('#####'));
        cy.get('#other').type(faker.random.words(5));
        cy.get('#phone').type(faker.phone.phoneNumberFormat());
        cy.get('#phone_mobile').type(faker.phone.phoneNumberFormat());
        cy.get('#alias').clear().type(user.email);
        cy.contains('Register').click()
        
    }); 
});

