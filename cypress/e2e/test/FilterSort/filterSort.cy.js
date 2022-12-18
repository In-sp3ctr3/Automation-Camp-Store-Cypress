import authPage from "../../page/authentication.page";
import splashPage from "../../page/splash.page";
import labels from "../../testData/labels.data";
import productPage from "../../page/products-cart.page";
import users from '../../testData/users.data';
import routesData from '../../testData/routes.data';
import sort from '../../testData/sort.data';
import products from '../../testData/products.data';

let items = [];
for (let item in products) {
    items.push(products[item]);
}

describe("Filter and sort", () => {
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

  it('should sort products from A-Z', () => {
    productPage.sort(sort.sortOptions["A to Z"]);

    //console.log(items);

    // Sort data list based on name, from A to Z
    let sortedItems = items.sort((a, b) => (a.name > b.name ? 1 : -1));

    cy.get(productPage.productNames).each(($elem, index) => {
      expect($elem.text()).equal(sortedItems[index].name);
    });
  });

  it('should sort products from Z-A', () => {
    productPage.sort(sort.sortOptions["Z to A"]);

    // Sort data list based on name, from Z to A
    let sortedItems = items.sort((a, b) => (a.name > b.name ? -1 : 1));

    cy.get(productPage.productNames).each(($elem, index) => {
      expect($elem.text()).equal(sortedItems[index].name);
    });
  });

  it('should sort products from low to high', () => {
    productPage.sort(sort.sortOptions["Low to High"]);

    // Sort data list based on price, from low to high
    let sortedItems = items.sort((a, b) =>
      Number(a.price) > Number(b.price) ? 1 : -1
    );

    cy.get(productPage.productCategories).parent().children("p").each(($elem, index) => {
        expect($elem.text()).equal(`$${sortedItems[index].price}`);
      });
  });
});