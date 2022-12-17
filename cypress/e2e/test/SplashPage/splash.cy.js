// import SplashPage from '../../page/splash.page';
// import route from '../../testData/routes.data';
// import labels from '../../testData/labels.data';

// describe('Splash page tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('should have the correct URL', () => {
//     cy.url().should('eq', route.base);
//   });

//   it('should have the correct title', () => {
//     SplashPage.title.should('be.visible');
//     SplashPage.title.contains(labels.splashPage.title);
//   });

//   it('should have a call to action button', () => {
//     SplashPage.callToAction.should('be.visible');
//     SplashPage.callToAction.contains(labels.splashPage.callToAction);
//   });

//   it('should have a splash image', () => {
//     SplashPage.splashImage.should('be.visible');
//   });

//   it('should navigate to the auth page when the call to action button is clicked', () => {
//     SplashPage.callToAction.click();
//     cy.url().should('include', route.login);
//   });
// });
