
import { loginmethod } from "../../../../page-objects/common/login";
import { businessReferrals } from "../../../../page-objects/salesforce/Suspects/businessReferral";
import { personReferrals } from "../../../../page-objects/salesforce/Suspects/personalReferral";
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const middleName = faker.person.middleName();
const lastName = faker.person.lastName();
const company = faker.company.name();
const fullName = firstName + ' ' + middleName + ' ' + lastName;
const email = faker.internet.email(firstName, lastName);
const secondaryFName = faker.person.firstName();
const secondaryLName = faker.person.lastName();
const secondaryEmail = faker.internet.email(secondaryFName, secondaryLName);


describe("Convert a business lead", ()=> {
    beforeEach("login to salesforce", ()=>{
        loginmethod.loginWithJwt();
    })

    it("Create a business referral", ()=>{
        businessReferrals.createNewBusinessReferral();
        businessReferrals.fillPrimaryName(company, firstName, middleName, lastName);
        businessReferrals.selectExternalReferrer();
        businessReferrals.fillPersonalInformation(email);
        businessReferrals.clickOnSave();
        cy.wait(10000);
        businessReferrals.convertTheSuspect();
        businessReferrals.navigateToOpportunity();
    })
    
})