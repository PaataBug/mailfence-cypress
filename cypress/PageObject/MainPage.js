class MainPage {
    openMailApp() {
      cy.get('.icon24-Message').click();
    }
  
    openDocuments() {
      cy.get('.icon24-Documents').click();
    }
  }
  
  export default new MainPage();
  