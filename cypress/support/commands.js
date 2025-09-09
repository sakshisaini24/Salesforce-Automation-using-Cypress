// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//JWT Login
Cypress.Commands.add('loginToSalesforceJWT', (username) => {
  const clientId = Cypress.env('SF_CLIENT_ID');
  cy.task('generateJWT', { username, clientId }).then((jwtToken) => {
    cy.request({
      method: 'POST',
      url: 'https://test.salesforce.com/services/oauth2/token',
      form: true,
      body: {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwtToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const accessToken = response.body.access_token;
      const instanceUrl = response.body.instance_url;

      cy.setCookie('sid', accessToken, {
        domain: '.salesforce.com',
        secure: true,
        httpOnly: false,
      });

      cy.visit('https://epicbrokers--fullcopy.sandbox.lightning.force.com/lightning/page/home');
    });
  });
});

