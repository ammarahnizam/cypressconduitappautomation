class MenuComponent {
    get settingsLink() {
        return cy.get('[href="/settings"]').as("Settings Link");
    }

    get newPostLink() {
        return cy.get('[href="/editor"]').as("New Post Link");
    }


    get userAccount() {
        return cy.get('.user-pic').as("User Account");
    }


    get globalFeed() {
        return cy.get('.nav-pills > li:nth-of-type(2) > .nav-link').as("Global Feed");
    }

    get signInLink() {
        return cy.get('[href="/login"]').as("Sign In Link");
    }



}
export default MenuComponent;