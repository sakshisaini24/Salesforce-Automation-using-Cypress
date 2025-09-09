
import { loginmethod } from "../../../../page-objects/common/login";
import { personReferrals } from "../../../../page-objects/salesforce/Suspects/personalReferral";
import { faker } from '@faker-js/faker';


describe("Convert a person lead", ()=> {
    beforeEach("login to salesforce", ()=>{
        loginmethod.loginWithJwt();
    })

    it("Create a person referral with External Referrer and Convert it", ()=>{
        const fname = faker.person.firstName();
        const mname = faker.person.middleName();
        const lname = faker.person.lastName();
        const name = fname +' '+ mname+' ' + lname;
        const sfname = faker.person.firstName();
        const slname = faker.person.lastName();
        personReferrals.createNewPersonReferral();
        personReferrals.fillName(fname, mname, lname);
        personReferrals.selectExternalReferrer();
        personReferrals.fillPersonalInformation(faker.internet.email());
        personReferrals.fillSecondaryClientInformation(sfname, slname);
        personReferrals.clickOnSave();
        cy.wait(10000);
        personReferrals.convertTheSuspect();
        personReferrals.navigateToOpportunity(name);
        personReferrals.verifyOCR(name);
    })

    it("Create a person referral with Internal Referrer and Convert it", ()=>{
        const fname = faker.person.firstName();
        const mname = faker.person.middleName();
        const lname = faker.person.lastName();
        const name = fname +' '+ mname+' ' + lname;
        const sfname = faker.person.firstName();
        const slname = faker.person.lastName();
        personReferrals.createNewPersonReferral();
        personReferrals.fillName(fname, mname, lname);
        personReferrals.selectInternalReferrer();
        personReferrals.fillPersonalInformation(faker.internet.email());
        personReferrals.fillSecondaryClientInformation(sfname, slname);
        personReferrals.clickOnSave();
        cy.wait(10000);
        personReferrals.convertTheSuspect();
        personReferrals.navigateToOpportunity(name);
        personReferrals.verifyOTM();
    })
    

    
})