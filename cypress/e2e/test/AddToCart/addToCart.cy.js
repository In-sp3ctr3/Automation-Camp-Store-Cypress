import users from "../../../testData/users.data";
import labels from "../../../testData/labels.data";
import authPage from "../../../page/authentication.page";
import route from "../../../testData/routes.data";
import splashPage from "../../../page/splash.page";
import productsPage from "../../../page/products.page";
import cartPage from "../../../page/cart.page";

describe ("Add To Cart Tests", () => { 
    beforeEach(() => {
        // Navigate to the authentication page before each test
        cy.visit("/");
        cy.url().should("eq", route.base);
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
        cy.url().should("include", route.products);
    });

    it("should add a single item to the cart", () => {
        // Click the first item in the products page
        productsPage.getProductAddToCartButton(0).click();
        
    });


});