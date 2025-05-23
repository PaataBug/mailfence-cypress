Cypress.Commands.add('loginMailfence', () => {
    const email = Cypress.env('email');
    const password = Cypress.env('password');
  
    cy.visit('/');
    cy.get('input[name="username"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  