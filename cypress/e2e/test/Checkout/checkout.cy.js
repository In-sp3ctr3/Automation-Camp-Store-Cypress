import authPage from "../../page/authentication.page";
import labels from "../../testData/labels.data";
import splashPage from "../../page/splash.page";
import Cart from "../../page/cart.page";
import Checkout from "../../page/checkout.page";
import routesData from "../../testData/routes.data";
import productsData from "../../testData/products.data";
import cardData from "../../testData/card.data";
import users from "../../testData/users.data";

describe("Checkout Tests", () => {
  beforeEach(() => {
        // Navigate to the authentication page before each test
        cy.visit("/");
        cy.url().should("eq", routesData.base);
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
        cy.url().should("include", routesData.products);
  });

  it('should successfully checkout', () => {
    Cart.addToCart(productsData.product0.name);
    Cart.checkout();
    cy.get(Checkout.titles).should("include.text", "Billing");
    cy.get(Checkout.titles).should("include.text", "Payment");
    cy.url().should("contain", routesData.checkout);
  });

  it('should successfully fill billing info', () => {
    Cart.addToCart(productsData.product0.name);
    Cart.checkout();
    cy.get(Checkout.orderSummaryToggle).last().should("be.visible").click();
    cy.get(Checkout.orderSummaryList).should("be.visible");
    cy.get(Checkout.orderSummaryList).first().children("span").first().should("include.text", productsData.product0.name);
    cy.get(Checkout.orderSummaryList).first().children("span").last().should("include.text", Number(productsData.product0.price).toFixed(2));
    cy.get(Checkout.orderSummaryTotal).should(
      "include.text",
      Number(productsData.product0.price).toFixed(2)
    );
  });

  
  it('should successfully fill payment info', () => {
    Cart.addToCart(productsData.product0.name);
    Cart.checkout();
    Checkout.fillBillingInfo(users.Checkout.validUser);
    Checkout.fillPaymentInfo(cardData.validCard);
    cy.get(Checkout.orderConfirmationTitle).should(
      "include.text",
      "Thank you for your order"
    );
    cy.url().should("contain", routesData.order);
  });

  //add negative tests

  it('should not checkout with invalid billing info', () => {
    Cart.addToCart(productsData.product0.name);
    Cart.checkout();
    Checkout.fillBillingInfo(users.Checkout.validUser);
    Checkout.fillPaymentInfo(cardData.validCard);

    //page should not change
    cy.url().should("contain", routesData.checkout);
  });
});