import users from '../../testData/users.data';
import labels from '../../testData/labels.data';
import routesData from '../../testData/routes.data';
import splashPage from '../../page/splash.page';
import authPage from '../../page/authentication.page';
import productsCartPage from "../../page/products-cart.page";
import products from "../../testData/products.data";


describe("Search Functionality", () => {
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
  });

  it("Should not be case-sensitive", () => {
    const searchTerm = products.product0.name;
    productsCartPage.search(searchTerm.toUpperCase());
    cy.get(productsCartPage.productNames).should("be.visible");
    cy.get(productsCartPage.productNames).should("include.text", searchTerm);
    cy.visit(routesData.products);
    productsCartPage.search(searchTerm.toLowerCase());
    cy.get(productsCartPage.productNames).should("be.visible");
    cy.get(productsCartPage.productNames).should("include.text", searchTerm);
  });

  it("Should not display any products when search term does not match any names", () => {
    const searchTerm = "sfsdfmsdfmsfmos";
    productsCartPage.search(searchTerm);
    cy.get(productsCartPage.productNames).should("not.exist");
  });

  it("Should search for and find exact product name", () => {
    const searchTerm = products.product9.name;
    productsCartPage.search(searchTerm);
    cy.get(productsCartPage.productNames).should("be.visible");
    cy.get(productsCartPage.productNames).should("include.text", searchTerm);
  });
});
