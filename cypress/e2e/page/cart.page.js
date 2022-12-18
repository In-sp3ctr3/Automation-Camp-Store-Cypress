import route from "../testData/routes.data";
import { productsPage } from "../page/products-cart.page";
class Cart {

  get cartButton() {
    return cy.get("#top-cart");
  }

    get checkoutButton() {
      return cy.get("button[class='snipcart-button-primary snipcart-base-button is-icon-right']");
  }

  get cartQuantity() {
    return cy.get(".snipcart-item-quantity__quantity span");
  }

  get cartTotal() {
    return cy.get("span.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight");
  }

  get cartProductName() {
    return cy.get(".snipcart-item-line__title");
  }

  get removeButton() {
    return cy.get(".snipcart-item-list > li:nth-of-type(1) .snipcart-item-line__header > .snipcart-button-icon");
  }

  get returnButton() {
    return cy.get(".snipcart-modal__close-title");
  }

  get itemQuantity() {
    return cy.get(".snipcart-cart-header__option");
  }

      addToCart(itemName) {
        let addToCart = `[data-item-name='${itemName}']`;
        cy.get(addToCart).scrollIntoView();
        cy.wait(10000);
        cy.get(addToCart).should("be.visible");
        cy.get(addToCart).focus();
        cy.get(addToCart).click( {force: true}); 
       // productsPage.getCartTitle().should("contain", labels.productsPage.cartTitle);
        cy.url().should("include", route.cart);
      }

      openCart() {
        this.cartButton.should("be.visible").click({force: true});
        cy.wait(5000);
      }

      closeCart() {
          this.returnButton.should("be.visible").click();
      }

      checkout() {
        this.checkoutButton.scrollIntoView();
        cy.wait(2000);
        this.checkoutButton.should("be.visible");
        this.checkoutButton.focus().trigger("click");
        cy.wait(2000);
      }
}
module.exports = new Cart();