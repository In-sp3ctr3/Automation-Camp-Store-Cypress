import authPage from "../../page/authentication.page";
import labels from "../../testData/labels.data";
import splashPage from "../../page/splash.page";
import users from "../../testData/users.data";
import Contact from "../../page/contact.page";
import routesData from "../../testData/routes.data";
import contactData from "../../testData/contact.data";

describe("Contact", () => {
  beforeEach(() => {
        // Navigate to the authentication page before each test
        cy.visit("/");
        cy.url().should("eq", routesData.base);
        splashPage.callToAction.click();

        authPage.formTitle.should("be.visible", { timeout: 10000 });

        //check form title
        authPage.formTitle.should("contain", labels.authPage.formTitle);
      
        //check current tab
        authPage.currentTab.should("contain", labels.authPage.loginTab);

        // Enter the valid email and password from the users data file
        authPage.emailInput.type(users.Login.validUser.email);
        authPage.passwordInput.type(users.Login.validUser.password);

        // Click the login button
        authPage.loginButton.click();

        // Verify that the user is redirected to the dashboard page
        cy.url().should("include", routesData.products);

        // Navigate to the contact page
        cy.get(Contact.contactNavButton).click();
        cy.url().should("include", routesData.contact);
  });

  it("should have correct social media links", () => {
    cy.get(Contact.socialMediaLinks).each(($elem, index) => {
      cy.get($elem).should("have.attr", "href").and("equal", contactData.socialMedia[index]);
    });
  });

    it('should successfully send a message', () => {
      Contact.sendMessage(users.Checkout.validUser);
        cy.get(Contact.successMessageTitle).should("be.visible").and("include.text", "Message Sent!");
        cy.get(Contact.successMessageDescription).should("be.visible").and("include.text", "Your message has been sent!");
      });

    it('should display error message when sending a message with invalid email', () => {
      Contact.sendMessage(users.Checkout.invalidUser);
      cy.get(Contact.errorMessage).should("be.visible").and("include.text", "Field is required!");
    });

    });

