
import { loginmethod } from "../../../../page-objects/common/login";
import { producerContacts } from "../../../../page-objects/salesforce/Contacts/producerContact";
import { faker } from '@faker-js/faker';


describe("Create a Contact", ()=> {
    beforeEach("login to salesforce", ()=>{
        loginmethod.loginWithJwt();
    })

    it("Create a Producer Contact", ()=>{
        const fname = faker.person.firstName();
        const mname = faker.person.middleName();
        const lname = faker.person.lastName();
        const name = fname +' '+ mname+' ' + lname;
        producerContacts.createNewProducer();
        producerContacts.fillInformation(fname, mname, lname);
    })
    

    
})