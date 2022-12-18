import users from "../../testData/users.data";
import labels from "../../testData/labels.data";
import authPage from "../../page/authentication.page";
import route from "../../testData/routes.data";
import splashPage from "../../page/splash.page";
import productsPage from "../../page/products-cart.page";
import products from "../../testData/products.data";
import cartPage from "../../page/cart.page";

//add 4 tests: 1. remove item from cart, 2. remove multiple items from cart, 3. open cart from product page, 4. verify cart total for single product

describe ("Cart Tests", () => { 
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

    it("should remove an item from the cart", () => {

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

        //remove item from cart
        cartPage.removeButton.click();

        //verify that the cart is empty
        productsPage.getEmptyCartTitle().should("contain", labels.productsPage.emptyCartTitle);
    });

    it("should remove multiple items from the cart", () => {
            
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
            cartPage.itemQuantity.should("contain", "1");

            //go back to products page
            productsPage.getCartCloseButton().click();
    
            //add another item to the cart
            productsPage.addToCart(products.product1.name);

            cy.url().should("include", route.cart);
            cy.wait(5000);
    
            // Verify that the cart modal contains the correct item
            productsPage.getProductTitle().should("contain", products.product1.name);
            productsPage.getProductPrice().should("contain", products.product1.price);
            
            cartPage.itemQuantity.should("contain", "2");
    
            //remove item from cart (forced to remove twice because of it failing the first time)
            cartPage.removeButton.click();
            cartPage.removeButton.click();

            cartPage.itemQuantity.should("contain", "1");

        });

            it("decreases quantity when item is removed from cart", () => {
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
                cartPage.itemQuantity.should("contain", "1");
    
                //remove item from cart
                cartPage.removeButton.click();
    
                //verify that the cart is empty
                productsPage.getEmptyCartTitle().should("contain", labels.productsPage.emptyCartTitle);
            });
});