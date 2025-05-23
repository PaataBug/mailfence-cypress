class EmailViewPage {
    saveAttachmentToDocuments(fileName) {
      cy.contains('a', fileName).rightclick();
      cy.contains('div', 'Save in Documents').click();
      cy.contains('.treeItemLabel', 'My documents', { timeout: 10000 }).click();
      cy.wait(3000);
      cy.get('#dialBtn_OK').click();
    }
  }
  
  export default new EmailViewPage();
  