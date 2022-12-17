// import users from "../../../testData/users.data";
// import labels from "../../../testData/labels.data";
// import authPage from "../../../page/authentication.page";
// import route from "../../../testData/routes.data";
// import splashPage from "../../../page/splash.page";

// describe("Login Tests", () => {
//   beforeEach(() => {
//     // Navigate to the authentication page before each test
//     cy.visit("/");
//     cy.url().should("eq", route.base);
//     splashPage.callToAction.click();

//     authPage.formTitle.should("be.visible", { timeout: 10000 });

//     //check form title
//     authPage.formTitle.should("contain", labels.authPage.formTitle);

//     //check form logo
//     authPage.formTitleLogo.should("be.visible");

//     //check social media button
//     authPage.socialButton.should("be.visible");
//     authPage.socialButton.should("contain", labels.authPage.socialMediaLogin);

//     // check current tab
//     authPage.currentTab.should("contain", labels.authPage.loginTab);

//     //check forgot password
//     authPage.forgetPasswordLink.should("be.visible");
//     authPage.forgetPasswordLink.should(
//       "contain",
//       labels.authPage.forgetPassword
//     );
//   });

//   it("should log in with valid input", () => {
//     // Enter the valid email and password from the users data file
//     authPage.emailInput.type(users.Login.validUser.email);
//     authPage.passwordInput.type(users.Login.validUser.password);

//     // Click the login button
//     authPage.loginButton.click();

//     // Verify that the user is redirected to the dashboard page
//     cy.url().should("include", route.products);
//   });

//   it("should not log in with invalid input", () => {
//     // Enter the invalid email and password from the users data file
//     authPage.emailInput.type(users.Login.invalidUser.email);
//     authPage.passwordInput.type(users.Login.invalidUser.password);

//     // Click the login button
//     authPage.loginButton.click();

//     // Verify that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);

//     // Verify that the error message is displayed
//     authPage.invalidCredentialsError.should("be.visible");
//   });

//   it("should not log in with invalid email", () => {
//     // Enter the invalid email and valid password from the users data file
//     authPage.emailInput.type(users.Login.invalidEmailUser.email);
//     authPage.passwordInput.type(users.Login.invalidEmailUser.password);

//     // Click the login button
//     authPage.loginButton.click();

//     // Verify that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);

//     // Verify that the error message is displayed
//     authPage.emailFieldError.should("be.visible");
//     authPage.emailFieldError.should("contain", labels.authPage.invalidEmail);
//   });

//   it("should not log in with blank email", () => {
//     // Enter the blank email and valid password from the users data file
//     authPage.passwordInput.type(users.Login.validUser.password);

//     // Click the login button
//     authPage.loginButton.click();

//     // Verify that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);

//     // Verify that the error message is displayed
//     authPage.emailFieldError.should("be.visible");
//     authPage.emailFieldError.should("contain", labels.authPage.blankEmail);
//   });

//   it("should not log in with blank password", () => {
//     // Enter the valid email and blank password from the users data file
//     authPage.emailInput.type(users.Login.validUser.email);

//     // Click the login button
//     authPage.loginButton.click();

//     // Verify that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should("be.visible");
//     authPage.passwordFieldError.should(
//       "contain",
//       labels.authPage.blankPassword
//     );
//   });
// });
