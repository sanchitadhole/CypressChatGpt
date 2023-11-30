/// <reference types="cypress" />

describe('Working with webelements', () => {
    it('working with form', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[name="first_name"]').type('sanchita');
        cy.get('input[name="last_name"]').type('dhole');
        cy.get('input[name="email"]').type('sanchitadhole27@gmail.com');
        cy.get('[name="message"]').type('I am smart person in the world');
        // cy.get('input[type="submit"]').click();

        // submit()
        // cy.get('[id="contact_form"]').submit();

        //getAttribute name
        cy.get('input[name="first_name"]').then((el) => {
            cy.log(el.prop('name'));
            cy.log(el.prop('type'));
            cy.log(el.prop('class'));
            cy.log(el.prop('placeholder'));
        });

        cy.get('input[name="first_name"]').invoke('attr','name').then((str)=>{
            cy.log(str);
        });
        cy.get('input[name="first_name"]').invoke('prop','name').then((el)=>{
            cy.log(el);
        });


    });
});