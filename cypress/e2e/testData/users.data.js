import labels from "./labels.data";

const random = Math.floor(Math.random() * 1000000);

module.exports = {
  Login: {
    validUser: {
      email: "TestUser-dev1@test.com",
      password: "TestUserDev-1",
    },
    invalidUser: {
      email: "jhghjghj@ggg.com",
      password: "TestUserDev-1",
      error: labels.authPage.invalidCredentials,
    },
    invalidEmailUser: {
      email: "ssm",
      password: "TestUserDev-1",
      error: labels.authPage.invalidEmail,
    },
    invalidCredentialsUser: {
      email: "test@email.com",
      password: "incorrectpassword",
      error: labels.authPage.invalidCredentials,
    },
  },
  SignUp: {
    validUser: {
      email: `TestUser-dev${random}@test.com`,
      password: "TestUserDev-1",
    },
    invalidPasswordUser: {
      email: "testemail@test.com",
      password: "test",
      error: labels.authPage.invalidPassword,
    },
    invalidEmailFormatUser: {
      email: "testemail.com",
      password: "TesterIO-1234",
      error: labels.authPage.invalidEmail,
    },
    shortPasswordUser: {
      email: "test@email.com",
      password: "short",
      error: labels.authPage.invalidPassword,
    },
    missingLowercaseAndNumberPasswordUser: {
      email: "test@email.com",
      password: "missinglowercaseandnumber",
      error: labels.authPage.invalidPassword,
    },
    missingUppercaseAndNumberPasswordUser: {
      email: "test@email.com",
      password: "missinguppercaseandnumber",
      error: labels.authPage.invalidPassword,
    },
    missingNumberAndSpecialCharacterPasswordUser: {
      email: "test@email.com",
      password: "missingnumberandspecialcharacter",
      error: labels.authPage.invalidPassword,
    },
  },
  Checkout: {
    validUser: {
      firstName: "User",
      lastName: "Lastname",
      email: 'Test@email.com',
      address: "29 Fake Street",
      suite: "9",
      city: "Quebec City",
      country: "Canada",
      province: "Quebec",
      countryCode: "CA",
      provinceCode: "QC",
      postalCode: "G1R 2B9",
      subject: "Test",
      message: "Test"
    },
    invalidUser: {
      firstName: "User",
      lastName: "Lastname",
      email: null,
      address: "29 Fake Street",
      suite: "9",
      city: "Quebec City",
      country: "Canada",
      province: "Quebec",
      countryCode: "CA",
      provinceCode: "QC",
      postalCode: "G1R 2B9",
      subject: "Test",
      message: "Test"
    },
  }
};
