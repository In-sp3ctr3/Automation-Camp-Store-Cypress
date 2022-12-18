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
    
    getProductTitle () {
    return cy.get(`.snipcart-item-line__title`);
    }

    getProductPrice () {
    return cy.get(`.snipcart-item-quantity__total-price`);
    }

    getProductBadge (index) {
    return cy.get(`.css-12qzrsi > div:nth-of-type(${index}) .css-1ccau2i`);
    }

    get productNames() {
        return "div[id^='product'] p.css-1n64n71";
    }

    getProductQuantity (index) {
    return cy.get(`.css-12qzrsi > div:nth-of-type(${index}) .chakra-numberinput__field`);
    }

    getCartTitle () {
    return cy.get(".snipcart-cart-header__title");
    }

    get selectSortDropDown() {
        return "#sort";
    }
    
    getCartCloseButton () {
        return cy.get(".snipcart-modal__close-title");
    }

    get searchField() {
    return "#search";
    }

    get productCategories() {
    return "div[id^='product'] div span";
    }

    getCartQuantity (index) {
    return cy.get(`li:nth-of-type(${index}) .snipcart-item-quantity__quantity > .snipcart__font--secondary`);
    }

    getEmptyCartTitle () {
    return cy.get(".snipcart-empty-cart__title");
    }

    addToCart(itemName) {
        let addToCartBtn = `[data-item-name='${itemName}']`;
        cy.get(addToCartBtn).scrollIntoView();
        cy.wait(2000);
        cy.get(addToCartBtn).should("be.visible");
        cy.get(addToCartBtn).focus();
        cy.get(addToCartBtn).click( {force: true}); 
      }

      sort(sort) {
        cy.get(this.selectSortDropDown).scrollIntoView();
        cy.wait(1900);
        cy.get(this.selectSortDropDown).select(sort);
        cy.wait(1900);
      }

}

export default new ProductPage()

