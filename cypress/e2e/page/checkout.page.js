class Checkout {
  get titles() {
    return "h1.snipcart__font--subtitle";
  }
  get fullNameInput() {
    return "input[name='name']";
  }
  get emailInput() {
    return "input[name='email']";
  }
  get streetAddressInput() {
    return "input[name='address1']";
  }
  get suiteInput() {
    return "input[name='address2']";
  }
  get cityInput() {
    return "input[name='city']";
  }
  get countryInput() {
    return "[id^='country']";
  }
  get provinceInput() {
    return "[id^='province']";
  }
  get postalCodeInput() {
    return "input[id^='postalCode']";
  }
  get continueButton() {
    return "button[type='submit']";
  }
  get orderSummaryToggle() {
    return "div.snipcart-modal__header-summary svg";
  }
  get orderSummaryList() {
    return ".snipcart-cart-summary-items-list.snipcart-scrollbar.snipcart-cart-summary__items li";
  }
  get orderSummaryTotal() {
    return ".snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large";
  }
  get orderConfirmationTitle() {
    return "div[class='snipcart__box--title'] div h1[class='snipcart__font--subtitle']";
  }
  get paymentFrame() {
    return ".snipcart-payment-card-form iframe";
  }
  get cardNumberInput() {
    return "#card-number";
  }
  get cardExpInput() {
    return "#expiry-date";
  }
  get cardCVVInput() {
    return "#cvv";
  }

  // Methods
  fillBillingInfo(user) {
    cy.get(this.fullNameInput).type(`${user.firstName} ${user.lastName}`);

    user.email ? cy.get(this.emailInput).type(user.email) : null;

    cy.get(this.streetAddressInput).type(user.address);
    cy.get(this.suiteInput).type(user.suite);
    cy.get(this.cityInput).type(user.city);
    
    const countryInputs = cy.$$(`input${this.countryInput}`).length;

    if (countryInputs > 0) {
      cy.get(this.countryInput).type(`${user.country}{enter}`);
    } else {
      cy.get(this.countryInput).select(user.countryCode);
    }
    
    cy.wait(1100);
    
    const provinceInputs = cy.$$(`input${this.provinceInput}`).length > 0;
    
    if (provinceInputs > 0) {
      cy.get(this.provinceInput).type(`${user.province}{enter}`);
    } else {
      cy.get(this.provinceInput).select(user.provinceCode);
    }
    
    cy.get(this.postalCodeInput).type(user.postalCode);

    cy.get(this.continueButton).click({ force: true });
  }

  fillPaymentInfo(card) {
    cy.iframe(this.paymentFrame).find(this.cardNumberInput).type(card.number);
    cy.iframe(this.paymentFrame).find(this.cardExpInput).type(card.exp);
    cy.iframe(this.paymentFrame).find(this.cardCVVInput).type(card.cvv);

    cy.get(this.continueButton).click({ force: true });
  }
}

export default new Checkout();
