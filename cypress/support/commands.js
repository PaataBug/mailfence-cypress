Cypress.Commands.add('loginMailfence', () => {
  cy.visit('https://mailfence.com');
  cy.get('#signin').click();
  cy.get('#UserID').type(Cypress.env('email'));
  cy.get('#Password').type(Cypress.env('password'));
  cy.contains('Enter').click();
});

Cypress.Commands.add("dragAndDrop", { prevSubject: "element" }, (subject, targetEl) => {
  cy.wrap(subject)
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { clientX: 100, clientY: 100 });
  
  cy.get(targetEl)
      .trigger("mousemove", { clientX: 100, clientY: 100 })
      .trigger("mouseup", { force: true });
});