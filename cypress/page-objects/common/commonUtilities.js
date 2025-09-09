class commonUtil{
    getRandomFirstName() {
        const randomNum = Cypress._.random(1000, 9999);
        const randomFirstName = `FirstName_${randomNum}`;
        return randomFirstName;
    }
    getRandomMiddleName() {
        const randomNum = Cypress._.random(1000, 9999);
        const randomMiddleName = `MiddleName_${randomNum}`;
        return randomMiddleName;
    }
    getRandomEmail(name) {
        const randomEmail = `${name}@gmail.com`;
        return randomEmail;     
    }
    getRandomPassword() {
        const randomNum = Cypress._.random(1000, 9999);
        const randomPassword = `Password_${randomNum}`;
        return randomPassword;
    }   
    getRandomLastName() {
        const randomNum = Cypress._.random(1000, 9999);
        const randomLastName = `LastName_${randomNum}`;
        return randomLastName;
    }
    getRandomCompanyName() {
        const randomNum = Cypress._.random(1000, 9999); 
        const randomCompanyName = `CompanyName_${randomNum}`;   
        return randomCompanyName;   
    }

    getRandomAccountName() {
        const randomNum = Cypress._.random(1000, 9999);
        const randomAccountName = `AccountName_${randomNum}`;
        return randomAccountName;
    }
    getRandomPhoneNumber() {
        const randomPhoneNumber = Cypress._.random(1000000000, 9999999999);
        return randomPhoneNumber;
    }

    getRandomWebsite() {
        const randomNum = Cypress._.random(1000, 9999); 
        const randomWebsite = `www.testwebsite_${randomNum}.com`;
        return randomWebsite;
    }

    getRandomFutureDate() {
        const today = new Date();
        const futureYear = today.getFullYear() + Math.floor(Math.random() * 10) + 1; 
        const futureMonth = Math.floor(Math.random() * 12);
        const futureDay = Math.floor(Math.random() * 28) + 1; 
      
        const date = new Date(futureYear, futureMonth, futureDay);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
      
        return `${mm}/${dd}/${yyyy}`;
    }
      
    getRandomPastDate() {
        const today = new Date();
        const pastYear = today.getFullYear() - Math.floor(Math.random() * 80); 
        const pastMonth = Math.floor(Math.random() * 12);
        const pastDay = Math.floor(Math.random() * 28) + 1; 
      
        const date = new Date(pastYear, pastMonth, pastDay);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
      
        return `${mm}/${dd}/${yyyy}`;
    }

    getTodayDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
      
        return `${mm}/${dd}/${yyyy}`;
    }

    getYesterdayDate() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); 
        const dd = String(yesterday.getDate()).padStart(2, '0');
        const mm = String(yesterday.getMonth() + 1).padStart(2, '0'); 
        const yyyy = yesterday.getFullYear();
      
        return `${mm}/${dd}/${yyyy}`;
    }
    getTomorrowDate() { 
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); 
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); 
        const yyyy = tomorrow.getFullYear();
      
        return `${mm}/${dd}/${yyyy}`;
    }

    convertToISO(dateStr) {
        const [day, month, year] = dateStr.split('/');
        return `${year}-${month}-${day}`;
    }

    getRandomDateOfBirth() {
        const randomDay = Math.floor(Math.random() * 28) + 1; 
        const randomMonth = Math.floor(Math.random() * 12) + 1; 
        const randomYear = Math.floor(Math.random() * (2003 - 1950)) + 1950; 
        return `${randomMonth}/${randomDay}/${randomYear}`;
    }

    expectedAge(birthdateStr){
        const birthdate = new Date(birthdateStr);
        const today = new Date();

        const birthYear = birthdate.getFullYear();
        const birthMonth = birthdate.getMonth() + 1;
        const birthDay = birthdate.getDate();

        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();

        let age = currentYear - birthYear;

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age -= 1;
        }
        let monthDiff = currentMonth - birthMonth;
        if (monthDiff < 0) monthDiff += 12;
        if (currentDay < birthDay) monthDiff -= 1;
        const decimalAge = +(age + monthDiff / 12).toFixed(1);
        return decimalAge;
    }

    checkThecheckbox(checkbox) {  
        cy.get(checkbox).then($checkbox => {
            if (!$checkbox.is(':checked')) {
                cy.wrap($checkbox).check();
            }
        });
    }    
    
    uncheckThecheckbox(checkbox) {  
        cy.get(checkbox).then($checkbox => {
            if ($checkbox.is(':checked')) {
                cy.wrap($checkbox).uncheck();
            }
        });
    }

    checkTheRadioButton(radioButton) {  
        cy.get(radioButton).then($radioButton => {
            if (!$radioButton.is(':checked')) {
                cy.wrap($radioButton).check();
            }
        });
    }

    uncheckTheRadioButton(radioButton) {  
        cy.get(radioButton).then($radioButton => {
            if ($radioButton.is(':checked')) {
                cy.wrap($radioButton).uncheck();
            }
        });
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }



}
export const utils = new commonUtil();