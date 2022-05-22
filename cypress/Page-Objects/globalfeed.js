class GlobalFeedPage {


    get articleTitleField() {
        return cy.get("[placeholder='Article Title']")
            .as("Article Title Field");
    }

    get articleInfoField() {
        return cy.get(':nth-child(2) > .form-control').as("Article Info Field");
    }



    get articleDescriptonField() {
        return cy.get("[placeholder='Write your article (in markdown)']").as("Article Description Field");
    }


    get tagsField() {
        return cy.get("[placeholder='Enter tags']").as("Enter Tags Field");
    }


    get publishButton() {
        return cy.get("button:contains(Publish Article)", { timeout: 1000 }).as("Publish Article Button");
    }


    get favoriteCount() {
        return cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn', { timeout: 1000 }).as("Favorite Count");
    }

    get highlightedCount() {
        return cy.get('.btn-primary').as("Highlighted  Count");
    }

    get favoriteIcon() {
        return cy.get(".ion-heart").as("Favorite Icon");
    }

}
export default GlobalFeedPage;