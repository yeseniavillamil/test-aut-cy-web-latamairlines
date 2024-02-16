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

Cypress.Commands.add('homepage', (url) => { 

    //Pagina principal definida en cypress.config.js - baseUrl 
    //el envio de cabeceras permite resolver problema de conexion ESOCKETTIMEDOUT 
    //cy.visit('/',{ headers: { "Accept-Encoding": "gzip, deflate" } });

    cy.intercept({resourceType: /xhr|fetch/},{log:false})

    cy.goTo('/co/es');
});

Cypress.Commands.add('goTo', (url) => { 

    //el envio de cabeceras permite resolver problema de conexion ESOCKETTIMEDOUT 
    cy.visit(url,{ headers: { "Accept-Encoding": "gzip, deflate" } });
});

