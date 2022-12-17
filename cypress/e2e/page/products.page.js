class ProductPage {

    get homePageTitle() {
        return cy.get(".css-kmq9po");
    }

    get navbarHome() {
        return cy.get("#top-home");
    }

    get navbarAbout() {
    return cy.get("#top-about");
    }

    get navbarContact() {
    return cy.get("#top-contact");
    }

    get cart () {
    return cy.get("#top-cart");
    }

    get signOut () {
    return cy.get("#top-signout");
    }

    get cartModal () {
    return cy.get(".snipcart-modal");
    }

    getProductImage (productNumber) {
    return cy.get(`#product-${productNumber}>img`);
    }
    
    getProductTitle (productNumber) {
    return cy.get(`.css-12qzrsi > div:nth-of-type(${productNumber}) .css-1n64n71`);
    }

    getProductPrice (productNumber) {
    return cy.get(`.css-12qzrsi > div:nth-of-type(${productNumber}) .css-0`);
    }

    getProductBadge (productNumber) {
    return cy.get(`.css-12qzrsi > div:nth-of-type(${productNumber}) .css-1ccau2i`);
    }

    getProductAddToCartButton (productNumber) {
    return cy.get(`#product-${productNumber}>#add-to-cart`);
    }
}

export default new ProductPage()

