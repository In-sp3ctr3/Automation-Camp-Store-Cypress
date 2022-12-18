import routesData from "../testData/routes.data";

class Contact {
  //#region Selectors

  get successMessageDescription() {
    return "#toast-1-description";
  }

  get firstNameField() {
    return "form #firstName";
  }

  get socialMediaLinks() {
    return "div.css-103gdes a";
  }

  get emailField() {
    return "form #email";
  }

  get errorMessage() {
    return "div[aria-live='polite']";
  }

  get lastNameField() {
    return "form #lastName";
  }

  get successMessageTitle() {
    return "#toast-1-title";
  }

  get messageField() {
    return "form #message";
  }

  get subjectField() {
    return "form #subject";
  }

  get contactNavButton() {
    return "#top-contact";
  }

  get sendButton() {
    return "form button";
  }

  goToContactPage() {
    cy.get(this.contactNavButton).should("be.visible").focus().click();
    cy.url().should("contain", routesData.contact);
  }
  sendMessage(data) {
    cy.get(this.firstNameField).type(data.firstName);
    cy.get(this.lastNameField).type(data.lastName);
    data.email ? cy.get(this.emailField).type(data.email) : null;
    cy.get(this.subjectField).type(data.subject);
    cy.get(this.messageField).type(data.message);
    cy.get(this.sendButton).should("be.visible").focus().click();
  }

}
module.exports = new Contact();
