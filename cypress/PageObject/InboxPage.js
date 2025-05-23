class InboxPage {
    openInbox() {
      cy.contains('Inbox').click();
    }
  
    refresh() {
      cy.contains('Refresh').click();
    }
  
    openEmail(subject) {
      cy.contains('.listSubject', subject, { timeout: 10000 }).should('be.visible');
      cy.contains(subject).click();
    }
  }
  
  export default new InboxPage();
  