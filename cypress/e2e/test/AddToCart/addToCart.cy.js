import users from "../../testData/users.data";
import labels from "../../testData/labels.data";
import authPage from "../../page/authentication.page";
import route from "../../testData/routes.data";
import splashPage from "../../page/splash.page";
import productsPage from "../../page/products-cart.page";
import products from "../../testData/products.data";

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

        // Verify that the products page is visible
        productsPage.homePageTitle.should("be.visible");
        productsPage.homePageTitle.should("contain", labels.productsPage.title);

        // Add the first item to the cart
        productsPage.addToCart(products.product0.name);

        cy.url().should("include", route.cart);

        productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);

        // Verify that the cart modal contains the correct item
        productsPage.getProductTitle().should("contain", products.product0.name);
        productsPage.getProductPrice().should("contain", products.product0.price);

        // Verify that the cart modal contains the correct quantity
        productsPage.getCartQuantity(1).should("contain", "1");

        productsPage.getCartCloseButton().click();
        
        cy.url().should("include", route.products); 
    });

    it("should add multiple items to the cart", () => {
        // Add the first item to the cart
        productsPage.addToCart(products.product0.name);

        cy.url().should("include", route.cart);

        productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);

        // Verify that the cart modal contains the correct item
        productsPage.getProductTitle().should("contain", products.product0.name);
        productsPage.getProductPrice().should("contain", products.product0.price);

        // Verify that the cart modal contains the correct quantity
        productsPage.getCartQuantity(1).should("contain", "1");

        productsPage.getCartCloseButton().click();
        
        cy.url().should("include", route.products); 

        // Add the second item to the cart
        productsPage.addToCart(products.product1.name);

        cy.url().should("include", route.cart);

        productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);

        // Verify that the cart modal contains the correct item
        productsPage.getProductTitle().should("contain", products.product1.name);
        productsPage.getProductPrice().should("contain", products.product1.price);

        // Verify that the cart modal contains the correct quantity
        productsPage.getCartQuantity(1).should("contain", "1");

        productsPage.getCartCloseButton().click();
        
        cy.url().should("include", route.products); 
    });

    it("should add multiple of the same item to the cart", () => {
        // Add the first item to the cart
        productsPage.addToCart(products.product0.name);

        cy.url().should("include", route.cart);

        productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);

        // Verify that the cart modal contains the correct item
        productsPage.getProductTitle().should("contain", products.product0.name);
        productsPage.getProductPrice().should("contain", products.product0.price);

        // Verify that the cart modal contains the correct quantity
        productsPage.getCartQuantity(1).should("contain", "1");

        productsPage.getCartCloseButton().click();
        
        cy.url().should("include", route.products); 

        // Add the second item to the cart
        productsPage.addToCart(products.product0.name);

        cy.url().should("include", route.cart);

        productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);

        // Verify that the cart contains the correct item
        productsPage.getProductTitle().should("contain", products.product0.name);
        productsPage.getProductPrice().should("contain", products.product0.price);

        // Verify that the cart contains the correct quantity
        productsPage.getCartQuantity(1).should("contain", "2");

        productsPage.getCartCloseButton().click();
        
        cy.url().should("include", route.products); 
    });


});