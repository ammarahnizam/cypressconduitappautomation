/// <reference types="cypress" />
describe('Perform a Get Request to one of the Conduit EndPoints', () => {
    it('SHOULD show 200 response for a given request', () => {
        cy.request({
            method: "GET",
            url: "https://api.realworld.io/api/tags",

        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });


    it('Validate Values in Response Body ', () => {
        cy.request({
            method: "GET",
            url: "https://api.realworld.io/api/tags",

        }).then(response => {
            expect(response.body).not.to.be.empty;
            expect(response.body.tags[0]).to.eq("welcome")
            expect(response.body.tags[1]).to.include("implementations")
        })
    });
});