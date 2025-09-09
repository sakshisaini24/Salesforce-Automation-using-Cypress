import { loginmethod } from "../../../page-objects/common/login";

describe("login", ()=>{
    it("mylogin", ()=>{
        loginmethod.loginWithJwt();
        cy.url().should("include", "/lightning/page/home");
    })
})