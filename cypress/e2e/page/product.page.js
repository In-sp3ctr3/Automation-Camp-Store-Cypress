class ProductPage {
  get items() {
    return cy.get('.css-uaqjf');
  }

    addToCartButton(productNumber) {
    return cy.get(`#product-${productNumber}>#add-to-cart`);
    }

    productTitle(productNumber) {
    return cy.get(`#product-${productNumber} .css-1n64n71`);
    }

    productPrice(productNumber) {
    return cy.get(`#product-${productNumber} .css-0`);
    }

    productAddToWishlistButton(productNumber) {
    return cy.get(`#product-${productNumber} #add-to-favorite`);
    }

    productRemoveFromWishlistButton(productNumber) {
    return cy.get(`#product-${productNumber} #remove-from-favorite`);
    }

    get alertMessage() {
    return cy.get('#chakra-toast-manager-top-right');
    }

    get favoritesTab() {
    return cy.get('#top-favorite');
    }

    addProductToWishlist(productNumber) {
    this.productAddToWishlistButton(productNumber).click();
    }

    removeProductFromWishlist(productNumber) {
    this.productRemoveFromWishlistButton(productNumber).click();
    }

}

export default new ProductPage();