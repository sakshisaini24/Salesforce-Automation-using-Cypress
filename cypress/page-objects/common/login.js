class logintoSalesforce{
    // login(){
    //     const username = Cypress.env("SALESFORCE_USERNAME");
    //     const password = Cypress.env("SALESFORCE_PASSWORD");
    //     cy.navigateAndLoginSalesforce(username, password);
    // }
    loginWithJwt() {
        cy.loginToSalesforceJWT(Cypress.env("SALESFORCE_USERNAME"));
    }
}


export const loginmethod = new logintoSalesforce();  