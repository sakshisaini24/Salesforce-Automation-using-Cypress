
import { loginmethod } from "../../../../page-objects/common/login";
import { externalReferrals } from "../../../../page-objects/salesforce/Suspects/externalReferral";
import { faker } from '@faker-js/faker';


describe("Convert external lead", ()=> {
    beforeEach("login to salesforce", ()=>{
        loginmethod.loginWithJwt();
    })

    it("Create a External referral with External Licensed Producer and Convert it", ()=>{
        externalReferrals.createNewExternalReferral();
        externalReferrals.fillPrimaryName(faker.company.name(), faker.person.firstName(), faker.person.middleName(), faker.person.lastName());
        externalReferrals.fillTypeAsLicensed();
        externalReferrals.fillPersonalInformation(faker.internet.email());
        externalReferrals.clickOnSave();
        cy.wait(10000);
        externalReferrals.convertTheSuspect();
        externalReferrals.navigateToContact();
        externalReferrals.verifyProducer();
        
    })

    it("Create a External referral with External Non-Licensed Referral and Convert it", ()=>{
        externalReferrals.createNewExternalReferral();
        externalReferrals.fillPrimaryName(faker.company.name(), faker.person.firstName(), faker.person.middleName(), faker.person.lastName());
        externalReferrals.fillTypeAsNonLicensed();
        externalReferrals.fillPersonalInformation(faker.internet.email());
        externalReferrals.clickOnSave();
        cy.wait(10000);
        externalReferrals.convertTheSuspect();
        externalReferrals.navigateToContact();
        externalReferrals.verifyBusinessContact();
    })
    

    
})