# 📧 Mailfence Cypress Automation

This project automates a complete end-to-end flow in [Mailfence](https://mailfence.com) using Cypress and the Page Object Model (POM). The test includes sending an email with a `.txt` attachment, saving the attachment to Documents, moving it to Trash, and confirming deletion.

---

## 🧪 What It Does

✅ Logs into Mailfence using secure credentials  
✅ Composes and sends an email with `.txt` attachment  
✅ Waits and verifies email receipt  
✅ Opens the email and saves the attachment to "My documents"  
✅ Moves the saved file to Trash using drag-and-drop  
✅ Deletes the file from Trash with confirmation modal

---

## 📁 Project Structure

cypress/
├── e2e/
│ └── emailFlow.cy.js # Main test file using POM
├── PageObject/ # All Page Object classes
│ ├── ComposePage.js
│ ├── DocumentsPage.js
│ ├── EmailViewPage.js
│ ├── InboxPage.js
│ ├── MainPage.js
│ └── TrashPage.js
├── support/
│ └── commands.js # Custom Cypress commands


---

## 🚀 Getting Started

### 1. Install dependencies
npm install

### 2. Run Cypress in interactive mode
npx cypress open

### 3. Run Cypress in headless mode
npx cypress run --spec cypress/e2e/emailFlow.cy.js

### Environment Variables
Use This credentials and create .env file 
CYPRESS_email=tttt@mailfence.com
CYPRESS_password=Happytesting1!

Make sure .env listed in .gitignore 


