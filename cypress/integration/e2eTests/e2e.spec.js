/// <reference types="cypress" />
import SignUpPage from "../../Page-Objects/signup";
import MenuComponent from "../../Page-Objects/menucomponent";
import GlobalFeedPage from "../../Page-Objects/globalfeed";
import SettingsPage from "../../Page-Objects/settings";

const signupspage = new SignUpPage();
const menu = new MenuComponent();
const global = new GlobalFeedPage();
const settings = new SettingsPage();



const uniqueId = Date.now().toString();
const emailid = `test${uniqueId}@gmail.com`;
const username = `Evie ${uniqueId}`;
const articleTitle = `Test ${uniqueId}`;

describe('End-to-End Flow of Conduit App', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });

    it('SHOULD Successfully Register > Add Post > Mark Article as Favorite > Confirm favorite Article > Update Profile > Logout', () => {
        cy.visit('http://localhost:4101/register')
        signupspage.userNameField.type(username);
        signupspage.emailIDField.type(emailid);
        signupspage.passwordField.type("Ea864B056$");
        signupspage.signupButton.click();
        cy.contains("Home").should("be.visible")
        menu.newPostLink.click();
        global.articleTitleField.type(articleTitle)
        global.articleInfoField.type("test")
        global.articleDescriptonField.type("test")
        global.tagsField.type("e2e tests{enter}");
        global.publishButton.click();
        cy.visit('http://localhost:4101');
        menu.globalFeed.click();
        global.favoriteCount.click();
        global.favoriteIcon.eq(0).should("be.visible")
        global.highlightedCount.should("be.visible")
        menu.settingsLink.click();
        settings.shortbioField.type("test user");
        settings.updateSettingsButton.click();
        settings.logoutButton.click();
        menu.signInLink.should('be.exist')




    })







})