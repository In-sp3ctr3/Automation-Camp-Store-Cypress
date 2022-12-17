const { default: productsPage } = require("../page/products-cart.page");

module.exports = {
    splashPage : {

        title: 'Welcome to the Automation Camp Store',
        callToAction: 'Sign In Or Register'
    },
    authPage : {
        formTitle: 'QualityCamp',
        loginTab: 'Log In',
        signUpTab: 'Sign Up',
        socialMediaLogin: 'Sign in with Google',
        socialMediaSignUp: 'Sign up with Google',
        terms: 'By signing up, you agree to our terms of service and privacy policy',
        forgetPassword: "Don't remember your password?",
        loginButton: 'Log In',
        signUpButton: 'Sign Up',
        invalidEmail: 'Email is invalid',
        invalidPassword: 'Password is invalid',
        blankEmail: "Email can't be blank",
        blankPassword: "Password can't be blank",
        invalidCredentials: "wrong email or password"
    },
    productsPage : {
        title: 'Automation Camp Store',
        cartTitle: 'Cart summary'
    }
};
