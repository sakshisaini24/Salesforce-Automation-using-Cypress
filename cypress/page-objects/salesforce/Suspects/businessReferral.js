import { commonMethods } from "../commonMethods";
import { utils } from "../../common/commonUtilities";
class businessReferral {

    newButton = "//a[@title='New' and contains(@class, 'forceActionLink') and @role='button']";
    businessRecordType = "//span[text()='Business Referral']/ancestor::label";
    nextButton = "//button[contains(@class, 'uiButton') and .//span[text()='Next']]";
    firstName = "//input[@name='firstName' and @placeholder='First Name']";
    middleName = "//input[@name='middleName' and @placeholder='Middle Name']";
    lastName = "//input[@name='lastName' and @placeholder='Last Name']";
    companyName = "//input[@name='Company']"
    birthDate = "//input[@name='Birthdate__c' and @type='text']";
    deadline = "//input[@name='Deadline__c']";
    email = "//input[@name='Email']";
    phone = "//input[@name='Phone']";
    mobile = "//input[@name='MobilePhone']";
    grossTarget = "//input[@name='Gross_Target__c']";
    tdcLifeSplit = "//input[@name='TDC_Life_Split__c']";
    saveButton = "//button[@name='SaveEdit' and text()='Save']";
    listViewDropdown = "//button[@title='Select a List View: Suspects']";
    searchBox = "//input[@aria-label='Search this list...']";
    recordDropdown = "//a[@title='Show 4 more actions']";
    editButton = "//a[@title='Edit' and @role='menuitem']";
    externalReferrallookup = "//input[placeholder='Search Contacts...']";
    newContactButton = "//*[text()='New Contact' or @title='New Contact']";
    producer = "//span[text()='Producer']/ancestor::label";
    internalReferrallookup = "//input[placeholder='Search People...']";
    myrid = "//*[text()='Doctor Who']"
    nextOnExtRef = "//span[text()='Next']/ancestor::button";
    showActions = "//button[.//span[text()='Show more actions']]";
    nextOnExtRef = "//span[text()='Next']/ancestor::button";
    menu = "//div[@role='menu']";
    convert = "//div[contains(@class, 'slds-dropdown__item')]//a[.//span[text()='Convert']]";
    checkbox = "//label[span[text()=\"Don't create an opportunity upon conversion checkbox\"]]/preceding-sibling::input";
    convertButton = "//span[contains(@class, 'runtime_sales_leadConvertModalFooter')]//button[normalize-space(text())='Convert']";



    createNewBusinessReferral() {
        commonMethods.navigateToObject("Suspects");
        cy.xpath(this.newButton).should('be.visible');
        cy.xpath(this.newButton).click();
        cy.xpath(this.businessRecordType).should('be.visible');
        cy.xpath(this.businessRecordType).click();
        cy.xpath(this.nextButton).should('be.visible');
        cy.xpath(this.nextButton).click();
    }

    fillSalutation() {
        commonMethods.fillRandompicklist("Salutation");
    }

    fillGender() {
        commonMethods.fillRandompicklist("Gender Identity");
    }

    fillMaritalStatus() {
        commonMethods.fillRandompicklist("Marital Status");
    }

    fillExpressedInterest() {
        commonMethods.fillRandompicklist("Expressed Interest");
    }

    fillExpressedInterestSubType() {
        commonMethods.fillRandompicklist("Expressed Interest Sub-Type")
    }

    fillRating() {
        commonMethods.fillRandompicklist("Rating");
    }

    fillChannel() {
        commonMethods.fillRandompicklist("Channel");
    }

    fillChannelDetails() {
        commonMethods.fillRandompicklist("Channel Detail");
    }

    fillStrategy() {
        commonMethods.fillRandompicklist("Strategy");
    }

    fillPersona() {
        commonMethods.fillRandompicklist("Persona");
    }

    fillSecondaryPersona() {
        commonMethods.fillRandompicklist("Secondary Persona");
    }

    fillLeadSource() {
        commonMethods.fillRandompicklist("Lead Source");
    }

    fillPrimaryName(cName, fname, mname, lname) {
        this.fillSalutation();
        cy.xpath(this.companyName).scrollIntoView().should('be.visible').type(cName);
        cy.xpath(this.firstName).scrollIntoView().should('be.visible').type(fname);
        cy.xpath(this.middleName).scrollIntoView().should('be.visible').type(mname);
        cy.xpath(this.lastName).scrollIntoView().should('be.visible').type(lname);
    }

    fillPersonalInformation(email) {
        cy.xpath(this.email).scrollIntoView();
        cy.xpath(this.email).should('be.visible');
        cy.xpath(this.email).type(email);
        cy.xpath(this.phone).scrollIntoView();
        cy.xpath(this.phone).should('be.visible');
        cy.xpath(this.phone).type(utils.getRandomPhoneNumber());
        cy.xpath(this.mobile).scrollIntoView();
        cy.xpath(this.mobile).should('be.visible');
        cy.xpath(this.mobile).type(utils.getRandomPhoneNumber());
        cy.xpath(this.birthDate).should('be.visible');
        cy.xpath(this.birthDate).type(utils.getRandomPastDate());
        this.fillGender();
        this.fillMaritalStatus();
        this.fillExpressedInterest();
        this.fillLeadSource();
        cy.xpath(this.deadline).scrollIntoView();
        cy.xpath(this.deadline).should('be.visible');
        cy.xpath(this.deadline).type(utils.getRandomPastDate());
    }

    fillReferralDetails() {
        this.fillRating();
    }

    selectExternalReferrer() {
        cy.get('input[placeholder="Search Contacts..."]', { includeShadowDom: true }).scrollIntoView()
            .should('be.visible')
            .click({ force: true });

        cy.xpath(this.myrid, { timeout: 10000 }).should('be.visible')
        cy.xpath(this.myrid, { timeout: 10000 }).click({ force: true });

    }


    selectInternalReferrer() {
        cy.xpath(this.internalReferrallookup).scrollIntoView();
        cy.xpath(this.internalReferrallookup).click({ force: true });
    }
    fillTDCRelatedInformation() {
        this.fillChannel();
        this.fillChannelDetails();
        cy.xpath(this.grossTarget).scrollIntoView();
        cy.xpath(this.grossTarget).should('be.visible');
        cy.xpath(this.grossTarget).type(utils.getRandomNumber(10000, 100000), { force: true });
        cy.xpath(this.tdcLifeSplit).scrollIntoView()
        cy.xpath(this.tdcLifeSplit).should('be.visible');
        cy.xpath(this.tdcLifeSplit).type(utils.getRandomNumber(10000, 100000), { force: true });
        this.fillStrategy();
    }

    clickOnSave() {
        cy.xpath(this.saveButton).should('be.visible');
        cy.xpath(this.saveButton).click();
    }

    findTheSuspect(suspect) {
        commonMethods.navigateToObject("Suspects");

        cy.xpath(this.listViewDropdown).should('be.visible').click();
        cy.contains('span', 'All Leads').should('be.visible').click();
        cy.xpath(this.searchBox, { timeout: 10000 }).should(($inputs) => {
            const visibleInput = [...$inputs].find((el) => Cypress.$(el).is(':visible'));
            if (!visibleInput) {
                throw new Error('No visible search input found yet.');
            }
        });

        cy.xpath(this.searchBox).filter(':visible').first().scrollIntoView().clear({ force: true }).type(`${suspect}{enter}`, { force: true });

        cy.xpath(this.recordDropdown, { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
        cy.xpath(this.editButton, { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.wait(2000);
    }

    convertTheSuspect() {
        cy.xpath(this.showActions).should('be.visible').click({ force: true });
        cy.xpath(this.menu).should('be.visible');
        cy.xpath(this.convert).click({ force: true });
        // Uncheck the checkbox based on its assistive text label
        cy.xpath(this.checkbox).scrollIntoView().should('be.visible')
            .uncheck({ force: true });
        cy.xpath(this.convertButton, { timeout: 20000 }).should('be.visible')
            .then(($btn) => {
                cy.wait(5000); // Small pause
                cy.wrap($btn).click({ force: true });
            });
        cy.wait(20000);

    }

    navigateToOpportunity(name) {
        // Wait for conversion success
        cy.xpath("//h3[text()='Opportunity']").should('exist');
        cy.xpath("//h3[text()='Opportunity']/ancestor::div[contains(@class, 'containerConvertedItem')]//a[contains(@href, '/lightning/r/')]")
            .first()
            .should('be.visible')
            .click({ force: true });


        cy.wait(2000);
        cy.xpath("//a[@data-tab-value='relatedListsTab' and contains(text(), 'Related')]").should('be.visible').click({ force: true });

    }

    verifyOCR(name) {
        cy.xpath("//article[contains(@class, 'slds-card') and .//span[@title='Contact Roles']]").scrollIntoView().should('exist');
        cy.xpath("//article[contains(@class, 'slds-card') and .//span[@title='Contact Roles']]//ul[contains(@class,'uiAbstractList')]/li").should('have.length', 2);
        cy.xpath("//article[contains(@class, 'slds-card') and .//span[@title='Contact Roles']]//ul[contains(@class,'uiAbstractList')]/li//a[contains(@href, '/lightning/r/003')]")
            .then($els => {
                const names = [...$els].map(el => el.textContent.trim());
                cy.log("Contact Role Names:", names);
                expect(names.length).to.eq(2);
                expect(names).to.include(name);
                expect(names).to.include("Mark Myridius 12");
            });
    }

    verifyOTM() {

        cy.contains("Stage History", { timeout: 10000 }).should('exist');

        cy.xpath("//span[@title='Opportunity Team']", { timeout: 15000 })
            .scrollIntoView()
            .should('exist')
            .should('be.visible');

        cy.xpath("//article[contains(@class, 'slds-card') and .//span[@title='Opportunity Team']]")
            .should('exist')
            .scrollIntoView()
            .should('be.visible');

        cy.xpath("//article[contains(@class, 'slds-card') and .//span[@title='Opportunity Team']]//a[contains(text(), 'Insights Integration')]")
            .should('exist')
            .should('be.visible');

    }
}

export const businessReferrals = new businessReferral()