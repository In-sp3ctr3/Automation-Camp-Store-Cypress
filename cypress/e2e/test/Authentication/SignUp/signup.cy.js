// import users from "../../../testData/users.data";
// import labels from "../../../testData/labels.data";
// import authPage from "../../../page/authentication.page";
// import route from "../../../testData/routes.data";
// import splashPage from "../../../page/splash.page";

// describe("Sign Up Tests", () => {
//   beforeEach(() => {
//     // Navigate to the authentication page before each test
//     cy.visit("/");
//     cy.url().should("eq", route.base);
//     splashPage.callToAction.click();
//     cy.url().should("include", route.login);

//     authPage.formTitle.should("be.visible", { timeout: 10000 });

//     //check form title
//     authPage.formTitle.should("contain", labels.authPage.formTitle);

//     //check form logo
//     authPage.formTitleLogo.should("be.visible");

//     //check social media button
//     authPage.socialButton.should("be.visible");
//     authPage.socialButton.should("contain", labels.authPage.socialMediaLogin);

//     // Select the sign up tab
//     authPage.currentTab.should("contain", labels.authPage.loginTab);
//     authPage.signUpTab.click();

//     // Select the sign up tab
//     authPage.currentTab.should("contain", labels.authPage.signUpTab);

//     //check form title
//     authPage.formTitle.should("contain", labels.authPage.signUpTab);

//     //check social media login
//     authPage.socialButton.should("be.visible");
//     authPage.socialButton.should("contain", labels.authPage.socialMediaSignUp);

//     //check terms
//     authPage.terms.should("be.visible");
//     authPage.terms.should("contain", labels.authPage.terms);
//   });

//   it("should successfully sign up with valid input", () => {
//     // Enter the valid email and password from the users data file
//     authPage.emailInput.type(users.SignUp.validUser.email);
//     authPage.passwordInput.type(users.SignUp.validUser.password);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the user is redirected to the dashboard page
//     cy.url().should("include", route.products);
//   });

//   it("should not sign up with invalid password", () => {
//     // Enter the email and invalid password from the users data file
//     authPage.emailInput.type(users.SignUp.invalidPasswordUser.email);
//     authPage.passwordInput.type(users.SignUp.invalidPasswordUser.password);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       users.SignUp.invalidPasswordUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with invalid email format", () => {
//     // Enter the invalid email format and password from the users data file
//     authPage.emailInput.type(users.SignUp.invalidEmailFormatUser.email);
//     authPage.passwordInput.type(users.SignUp.invalidEmailFormatUser.password);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.emailFieldError.should(
//       "contain",
//       users.SignUp.invalidEmailFormatUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with short password", () => {
//     // Enter the email and short password from the users data file
//     authPage.emailInput.type(users.SignUp.shortPasswordUser.email);
//     authPage.passwordInput.type(users.SignUp.shortPasswordUser.password);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       users.SignUp.shortPasswordUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with password missing uppercase and numbers", () => {
//     // Enter the email and password missing uppercase and numbers from the users data file
//     authPage.emailInput.type(
//       users.SignUp.missingUppercaseAndNumberPasswordUser.email
//     );
//     authPage.passwordInput.type(
//       users.SignUp.missingUppercaseAndNumberPasswordUser.password
//     );

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       users.SignUp.missingUppercaseAndNumberPasswordUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with password missing lowercase and numbers", () => {
//     // Enter the email and password missing lowercase and numbers from the users data file
//     authPage.emailInput.type(
//       users.SignUp.missingLowercaseAndNumberPasswordUser.email
//     );
//     authPage.passwordInput.type(
//       users.SignUp.missingLowercaseAndNumberPasswordUser.password
//     );

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       users.SignUp.missingLowercaseAndNumberPasswordUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with password missing numbers and special characters", () => {
//     // Enter the email and password missing numbers and special characters from the users data file
//     authPage.emailInput.type(
//       users.SignUp.missingNumberAndSpecialCharacterPasswordUser.email
//     );
//     authPage.passwordInput.type(
//       users.SignUp.missingNumberAndSpecialCharacterPasswordUser.password
//     );

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       users.SignUp.missingNumberAndSpecialCharacterPasswordUser.error
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with blank email", () => {
//     // Enter the password from the users data file
//     authPage.passwordInput.type(users.SignUp.validUser.password);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.emailFieldError.should("contain", labels.authPage.blankEmail);

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });

//   it("should not sign up with blank password", () => {
//     // Enter the email from the users data file
//     authPage.emailInput.type(users.SignUp.validUser.email);

//     // Click the sign up button
//     authPage.signUpButton.click();

//     // Verify that the error message is displayed
//     authPage.passwordFieldError.should(
//       "contain",
//       labels.authPage.blankPassword
//     );

//     //ensure that the user is not redirected to the dashboard page
//     cy.url().should("include", route.login);
//   });
// });
