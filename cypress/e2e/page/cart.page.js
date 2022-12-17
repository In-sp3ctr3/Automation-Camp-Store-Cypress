class CartPage {
  get cartItems() {
    return cy.get('.snipcart-item-line__container')
  }
}

export default new CartPage()