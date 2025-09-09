import { commonMethods } from "../commonMethods";
import { personReferrals } from "../Suspects/personalReferral";
class producerContact {

    newButton = "//a[@title='New' and contains(@class, 'forceActionLink') and @role='button']";
    producerRecordType = "//span[text()='Producer']/ancestor::label";
    nextButton = "//button[contains(@class, 'uiButton') and .//span[text()='Next']]";
    relatedAccount = "//input[placeholder='Search Prospects & Clients...']";
    typeField = "//button[@aria-label='External Referrer Type']";
    externalReferrer = "//label[contains(text(),'External Referrer Type')]/following::button[1]";
    licensedProducer = "//span[@title='External Licensed Producer']";
    firstName = "//input[@name='firstName' and @placeholder='First Name']";
    middleName = "//input[@name='middleName' and @placeholder='Middle Name']";
    lastName = "//input[@name='lastName' and @placeholder='Last Name']";
    account = "//*[text()='Olympus Partners']";
    savebutton = "//button[@name='SaveEdit' and contains(@class, 'slds-button_brand')]";

    createNewProducer() {
        commonMethods.navigateToObject("Contacts");
        cy.xpath(this.newButton).should('be.visible');
        cy.xpath(this.newButton).click();
        cy.xpath(this.producerRecordType).should('be.visible');
        cy.xpath(this.producerRecordType).click();
        cy.xpath(this.nextButton).should('be.visible');
        cy.xpath(this.nextButton).click();
    }

    fillSaluation() {
        commonMethods.fillRandompicklist("Salutation");
    }

    fillExternalReferrerType() {
        cy.xpath(this.externalReferrer).scrollIntoView()
            .should('be.visible').click({ force: true });
        cy.xpath(this.licensedProducer).should('be.visible').click({ force: true });

    }

    fillInformation(fname, mname, lname) {
        this.fillSaluation();
        cy.xpath(this.firstName).should('be.visible').type(fname);
        cy.xpath(this.middleName).should('be.visible').type(mname);
        cy.xpath(this.lastName).should('be.visible').type(lname);
        cy.get('input[placeholder="Search Prospects & Clients..."]', { includeShadowDom: true }).scrollIntoView()
            .should('be.visible')
            .click({ force: true });

        cy.xpath(this.account, { timeout: 10000 }).should('be.visible')
        cy.xpath(this.account, { timeout: 10000 }).click({ force: true });

        this.fillExternalReferrerType();
        cy.xpath(this.savebutton).filter(':visible').first().should('be.visible').click({ force: true });
    }
}

export const producerContacts = new producerContact()