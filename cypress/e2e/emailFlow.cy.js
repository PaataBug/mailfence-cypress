import '../support/commands.js';
import '@4tw/cypress-drag-drop';

import MainPage from '../PageObject/MainPage';
import ComposePage from '../PageObject/ComposePage';
import InboxPage from '../PageObject/InboxPage';
import EmailViewPage from '../PageObject/EmailViewPage';
import DocumentsPage from '../PageObject/DocumentsPage';
import TrashPage from '../PageObject/TrashPage';

describe('Mailfence Email and Document Flow', () => {

  beforeEach(() => {
    cy.loginMailfence(); // Use custom login command
  });

  it('should send an email with .txt attachment, save it, and delete from Trash', () => {
    const fileName = 'sample-email.txt';
    const subject = 'Cypress Attachment Test';
    const fileContent = 'This is a test file created by Cypress.';

    // Create .txt file to attach
    cy.writeFile(`cypress/fixtures/${fileName}`, fileContent);

    // Open mail and start composing
    MainPage.openMailApp();
    ComposePage.openNewMessage();
    ComposePage.fillTo(Cypress.env('email'));
    ComposePage.fillSubject(subject);
    ComposePage.attachFile(fileName);
    ComposePage.send();

    // Wait for delivery and open the received email
    InboxPage.openInbox();
    cy.wait(10000);
    InboxPage.refresh();
    InboxPage.openEmail(subject);

    // Save attachment to Documents
    EmailViewPage.saveAttachmentToDocuments(fileName);

    // Open Documents and move file to Trash
    MainPage.openDocuments();
    cy.wait(5000);
    DocumentsPage.moveFileToTrash(fileName);

    // Delete file from Trash
    DocumentsPage.openTrash();
    TrashPage.deleteFile(fileName);
  });

});
