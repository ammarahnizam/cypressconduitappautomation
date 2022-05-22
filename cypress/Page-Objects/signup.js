class SignUpPage {


    get userNameField() {
        return cy.get("[placeholder='Username']")
            .as("User Name Field");
    }

    get emailIDField() {
        return cy.get("[placeholder='Email']").as("Email Field");
    }


    get passwordField() {
        return cy.get("[placeholder='Password']").as("Password Field");
    }

    get signupButton() {
        return cy.get("button:contains(Sign up)", { timeout: 1000 }).as("Sign up Button");
    }


}
export default SignUpPage;