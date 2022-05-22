class SettingsPage {
    get shortbioField() {
        return cy.get("textarea")
            .as("Short Bio Field");
    }


    get updateSettingsButton() {
        return cy.get("button:contains(Update Settings)", { timeout: 1000 }).as("Update Settings Button");
    }


    get logoutButton() {
        return cy.get("button:contains(Or click here to logout.)", { timeout: 2000 }).as("Logout Button");
    }


}
export default SettingsPage;