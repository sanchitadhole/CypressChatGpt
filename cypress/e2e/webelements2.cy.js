/// <reference types="cypress" />
// test scenario ----->  verify the contact us form 
// testcase  1 -- validate with valid data 
// testcase  2 -- validate the reset button functionality
// test case 3 --validate with in valid data 


describe('Verify the contact us form',()=>{
    it('verify the contact us form with valid data',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get("input[placeholder='First Name']").type('sanchita');
        cy.get("input[placeholder='Last Name']").type('dhole');
        cy.get("input[placeholder='Email Address']").type('sanchitadhole27@gmail.com');
        cy.get("textarea[placeholder='Comments']").type('I am good');
        cy.get("input[value='SUBMIT']").click();
        cy.get('h1').should('be.visible')
    });
    it('verify the contact us form with invalid data',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get("input[placeholder='First Name']").type('sanchita');
        cy.get("input[placeholder='Last Name']").type('dhole');
        cy.get("input[placeholder='Email Address']").type('sanchitadhole27gmail.com');
        cy.get("textarea[placeholder='Comments']").type('I am good');
        cy.get("input[value='SUBMIT']").click();
        cy.get('body').should('contain','Error: Invalid email address');

    });
    it('verify the contact us form with reset button',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get("input[placeholder='First Name']").type('sanchita');
        cy.get("input[placeholder='Last Name']").type('dhole');
        cy.get("input[placeholder='Email Address']").type('sanchitadhole27gmail.com');
        cy.get("textarea[placeholder='Comments']").type('I am good');
        cy.get("input[value='RESET']").click();
        cy.get("input[placeholder='First Name']").should('contain','');

    });
});