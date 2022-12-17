class WishListPage {
  get pageTitle() {
    return cy.get('.css-11cq7yk');
  }

  get items() {
    return cy.get('.css-uaqjf');
  }

  get homeButton() {
    return cy.get('#top-home');
  }

  get emptyWishlistTitle() {
    return cy.get('.css-owjkmg > .chakra-heading');
  }

  productImage(productNumber) {
    return cy.get(`.css-uaqjf:nth-of-type(${productNumber}) .chakra-image`);
  }

  productTitle(productNumber) {
    return cy.get(`.css-uaqjf:nth-of-type(${productNumber}) .css-1n64n71`);
  }

    productPrice(productNumber) {
    return cy.get(`.css-uaqjf:nth-of-type(${productNumber}) .css-0`);
    }

    productAddToCartButton(productNumber) {
    return cy.get(`.css-uaqjf:nth-of-type(${productNumber}) #add-to-cart`);
    }

    productRemoveFromWishlistButton(productNumber) {
    return cy.get(`.css-uaqjf:nth-of-type(${productNumber}) #remove-favorite-btn`);
    }

    removeProductFromWishlist(productNumber) {
    this.productRemoveFromWishlistButton(productNumber).click();
    }
}

export default new WishListPage();