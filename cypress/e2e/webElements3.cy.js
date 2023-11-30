/// <reference types = "cypress"/>

describe('Locating Elements', () => {
    it('find a single element', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('h2[name="contactme"]').should('exist');
    });
    it('find a multiple elements',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('input[type="text"]').should('have.length',3);
        cy.get('input[type="submit"]').should('have.length.greaterThan',0);
    });
    it('find element by className',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('.text-center').should('have.length',2)
    });
    it('find element by cssSelector',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
    });
    it('find element by cssSelector',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
    });
    it('find element by id Selector',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('#contact_form').should('exist');
    });
    it('find element by link attribute',()=>{
        cy.visit('https://www.webdriveruniversity.com/');
        cy.contains('CONTACT US').should('exist');
    });
    it('find element by name attribute',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').should('exist')
    })

    it('find element by tagName',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('exist').should('have.text','CONTACT US')
    })
});
