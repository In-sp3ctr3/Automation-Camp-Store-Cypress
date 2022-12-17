class AuthenticationPage {
  get formTitle() {
    return cy.get(".auth0-lock-name");
  }
  get currentTab() {
    return cy.get(".auth0-lock-tabs-current > span");
  }
  get socialButton() {
    return cy.get(".auth0-lock-social-button");
  }
  get formTitleLogo() {
    return cy.get(".auth0-lock-header-logo");
  }
  get emailInput() {
    return cy.get(".auth0-lock-input[name='email']");
  }
  get passwordInput() {
    return cy.get(".auth0-lock-input[name='password']");
  }
  get forgetPasswordLink() {
    return cy.get(".auth0-lock-alternative-link");
  }

  get loginButton() {
    return cy.get("[name=submit]");
  }
  get signUpButton() {
    return cy.get("[name=submit]");
  }

  get loginTab() {
    return cy.get(".auth0-lock-tabs>li:nth-of-type(1)");
  }

  get signUpTab() {
    return cy.get(".auth0-lock-tabs>li:nth-of-type(2)");
  }

  get terms() {
    return cy.get(".auth0-lock-terms>span");
  }

  get emailFieldError() {
    return cy.get(".auth0-lock-input-email .auth0-lock-error-invalid-hint");
  }

  get passwordFieldError() {
    return cy.get(".auth0-lock-input-password .auth0-lock-error-invalid-hint");
  }

  get invalidCredentialsError() {
    return cy.get(".auth0-global-message-error");
  }

}

export default new AuthenticationPage();
