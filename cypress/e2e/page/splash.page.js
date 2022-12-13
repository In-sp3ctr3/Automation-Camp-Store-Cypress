class SplashPage {
  get title() {
    return cy.get('#login-text');
  }
}

export default new SplashPage();