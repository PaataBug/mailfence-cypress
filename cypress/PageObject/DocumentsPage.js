class DocumentsPage {
    moveFileToTrash(fileName) {
      cy.get('.GCSDBRWBCKB > .GCSDBRWBGT', { timeout: 15000 })
        .should('be.visible')
        .dragAndDrop('#doc_tree_trash');
    }
  
    openTrash() {
      cy.get('#doc_tree_trash').click();
    }
  }
  
  export default new DocumentsPage();
  