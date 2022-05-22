/// <reference types="cypress" />


describe("UI Integration Test", () => {
    it("Validate Login and Mock Popular Tags", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'tags.json' })
        cy.login();
        cy.contains("Global Feed").should("be.visible")
        cy.get('.tag-list').should("contain", "welcome").and("contain", "UI Integration Testing");


    });


});