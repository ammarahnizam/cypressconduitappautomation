Cypress.Commands.add("login", () => {
    cy.visit("http://localhost:4101/login");
    cy.get('[placeholder="Email"]').type("regqa@mailinator.com");
    cy.get('[placeholder="Password"]').type("12345678");
    cy.get("button:contains(Sign in)").click();
});