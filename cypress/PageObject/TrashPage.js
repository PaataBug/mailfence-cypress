class TrashPage {
    deleteFile(fileName) {
      cy.contains(fileName).should('exist');
      cy.get('.GCSDBRWBCKB > .GCSDBRWBGT').click();
      cy.get('[title="Delete"]').click();
      cy.get('#dialBtn_YES', { timeout: 10000 }).should('be.visible').click();
      cy.contains(fileName).should('not.exist');
    }
  }
  
  export default new TrashPage();
  