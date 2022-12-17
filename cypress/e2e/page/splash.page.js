class SplashPage {
  get title() {
    return cy.get("#login-text");
  }

  get callToAction() {
    return cy.get("#signInOrRegister");
  }

  get splashImage() {
    return cy.get("[alt='Login Image']");
  }
}

export default new SplashPage();
