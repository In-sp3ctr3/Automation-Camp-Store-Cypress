const SplashPage = require('../page/splash.page');

describe('Splash Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have the correct title', () => {
        SplashPage.title.should('have.text', 'Welcome to the Automation Camp Store');
    });

    });