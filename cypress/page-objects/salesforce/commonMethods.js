class commonMethod {

    appLauncher = "//button[@title='App Launcher']";
    appLauncherSearch = "//input[@placeholder='Search apps and items...']";
    appLauncherSearchResult(object) {
        return `//div[contains(@class, 'slds-size_small')]//b[normalize-space()='${object}']`;
    }
    objectDropdown = "//div[contains(@class, 'navMenu')]//button[@title='Show Navigation Menu']";
    object(name) {
        return `//a[@role='menuitem' and contains(text(), '${name}')]`;
    }
    picklist(name) {
        return `//button[@role='combobox' and @aria-label='${name}']`;
    }


    navigateToObject(objectName) {
        cy.xpath(this.appLauncher).should('be.visible');
        cy.xpath(this.appLauncher).click();
        cy.xpath(this.appLauncherSearch).should('be.visible');
        cy.xpath(this.appLauncherSearch).type(objectName);
        cy.xpath(this.appLauncherSearchResult(objectName), {timeout: 1000}).should('be.visible');
        cy.xpath(this.appLauncherSearchResult(objectName), {timeout: 1000}).click();
        cy.wait(2000);
    }

    fillRandompicklist(name) {
        cy.xpath(this.picklist(name), { timeout: 10000 }).scrollIntoView().should('be.visible').click();
        cy.wait(500);
        cy.xpath("//lightning-base-combobox-item[@role='option']").should('exist').then($options => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).scrollIntoView().click({ force: true });
        });
    }
    fillTextField(label, val) {
        cy.xpath(this.picklist(label), { timeout: 10000 }).scrollIntoView();
        cy.xpath(this.picklist(label), { timeout: 10000 }).should('be.visible');
        cy.xpath(this.picklist(label), { timeout: 10000 }).click();
        cy.xpath(`//lightning-base-combobox-item[@role='option' and @data-value='${val}']`).scrollIntoView();
        cy.xpath(`//lightning-base-combobox-item[@role='option' and @data-value='${val}']`).should('be.visible');
        cy.xpath(`//lightning-base-combobox-item[@role='option' and @data-value='${val}']`).click();
    }

    selectFromLookup(lookupPlaceholder, valueToType, valueToClick) {
        cy.xpath(`//input[@placeholder='${lookupPlaceholder}']`)
            .should('be.visible')
            .scrollIntoView()
            .click({ force: true })
            .clear()
            .type(valueToType, { delay: 100 });

        cy.wait(1000);

        cy.xpath(`//span[contains(text(), '${valueToClick}')]`)
            .should('be.visible')
            .click({ force: true });
    }
}


export const commonMethods = new commonMethod()