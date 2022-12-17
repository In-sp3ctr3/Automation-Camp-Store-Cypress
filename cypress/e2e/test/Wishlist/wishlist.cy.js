import users from "../../testData/users.data";
import labels from "../../testData/labels.data";
import authPage from "../../page/authentication.page";
import route from "../../testData/routes.data";
import splashPage from "../../page/splash.page";
import wishlistPage from "../../page/wishlist.page";
import productPage from "../../page/product.page";
import products from "../../testData/products.data";

describe('Wishlist', () => {
    beforeEach(() => {
        cy.visit('/');
        splashPage.callToAction.click();
        //wait for the page to load
        cy.wait(2000);

        authPage.emailInput.type(users.Login.validUser.email);
        authPage.passwordInput.type(users.Login.validUser.password);
    
        // Click the login button
        authPage.loginButton.click();
        cy.wait(2000);

        // Verify that the user is redirected to the dashboard page
        cy.url().should("include", route.products);
    });

    it('should add a product to the wishlist from the product page', () => {
        //verify all products are displayed
        productPage.items.should('have.length', 22);

        productPage.productTitle(1).should('contain', products.product1.name);
        productPage.productPrice(1).should('contain', products.product1.price);

        productPage.addProductToWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        //favorites tab should display the number 1 in the badge
        productPage.favoritesTab.should('contain', '1');

        //click on the favorites tab
        cy.wait(8000);
        productPage.favoritesTab.click();

        //verify that the product is displayed in the wishlist
        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);

        //verify product image is displayed
        wishlistPage.productImage(1).should('be.visible');

        cy.url().should("include", route.wishlist);
    });

    it('should remove a product from the wishlist from the favorites page', () => {
        productPage.addProductToWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        //favorites tab should display the number 1 in the badge
        productPage.favoritesTab.should('contain', '1');

        //wait for favorites tab to be clickable
        cy.wait(8000);
        productPage.favoritesTab.click();

        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);

        wishlistPage.removeProductFromWishlist(1);

        productPage.alertMessage.should('contain', labels.wishlist.productRemovedFromWishlist);

        wishlistPage.productTitle(1).should('not.exist');
        wishlistPage.productPrice(1).should('not.exist');

        cy.url().should("include", route.wishlist);
    });

    it('should add a product to the wishlist from the product page and remove it from the products page', () => {
        productPage.addProductToWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        //favorites tab should display the number 1 in the badge
        productPage.favoritesTab.should('contain', '1');

        //wait for favorites tab to be clickable
        cy.wait(8000);
        productPage.favoritesTab.click();

        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);

        cy.url().should("include", route.wishlist);

        wishlistPage.homeButton.click();

        cy.url().should("include", route.products);

        productPage.removeProductFromWishlist(1);

        productPage.alertMessage.should('contain', labels.wishlist.productRemovedFromWishlist);

        //favorites tab should display the number 1 in the badge
        productPage.favoritesTab.should('contain', '0');
    });

    it('should add multiple products to the wishlist', () => {
        productPage.addProductToWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        productPage.favoritesTab.should('contain', '1');

        cy.wait(8000);
        productPage.favoritesTab.click();

        cy.url().should("include", route.wishlist);

        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);
        wishlistPage.productTitle(2).should('not.exist');
        wishlistPage.productPrice(2).should('not.exist');
        
        wishlistPage.homeButton.click();
        cy.wait(2000);

        cy.url().should("include", route.products);

        productPage.addProductToWishlist(2);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        productPage.favoritesTab.should('contain', '2');

        cy.wait(8000);
        productPage.favoritesTab.click();

        //total number of products in the wishlist should be 2
        wishlistPage.items.should('have.length', 2);

        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);
        wishlistPage.productTitle(2).should('contain', products.product2.name);
        wishlistPage.productPrice(2).should('contain', products.product2.price);
    });

    it('should add a product to the wishlist and remove it from the wishlist page', () => {
        productPage.addProductToWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productAddedToWishlist);

        productPage.favoritesTab.should('contain', '1');

        cy.wait(8000);
        productPage.favoritesTab.click();

        cy.url().should("include", route.wishlist); 

        wishlistPage.productTitle(1).should('contain', products.product1.name);
        wishlistPage.productPrice(1).should('contain', products.product1.price);

        wishlistPage.removeProductFromWishlist(1);
        productPage.alertMessage.should('contain', labels.wishlist.productRemovedFromWishlist);
        wishlistPage.productTitle(1).should('not.exist');
        wishlistPage.productPrice(1).should('not.exist');

        //favorites tab should display the number 0 in the badge
        productPage.favoritesTab.should('contain', '0');

        wishlistPage.emptyWishlistTitle.should('contain', labels.wishlist.emptyWishlist);
    });

});