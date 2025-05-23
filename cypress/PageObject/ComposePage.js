class ComposePage {
    openNewMessage() {
      cy.get('#mailNewBtn > .tbBtnText').click();
    }
  
    fillTo(email) {
      cy.get('#mailTo').type(email);
    }
  
    fillSubject(subject) {
      cy.get('#mailSubject').type(subject);
    }
  
    attachFile(fileName) {
      cy.contains('a', 'Attachment').click();
      cy.get('input[type="file"]', { timeout: 5000 }).should('exist')
        .selectFile(`cypress/fixtures/${fileName}`, { force: true });
    }
  
    send() {
      cy.get('#mailSend').click();
    }
  }
  
  export default new ComposePage();
  