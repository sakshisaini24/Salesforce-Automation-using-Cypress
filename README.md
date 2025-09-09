This project contains Salesforce Testing Automation on Financial Services Cloud using Cypress.

Steps to Setup-->
1) Node Js (To check if Node Js is installed on your system run the command node -v on command prompt)
2) VSCode
3) After creating a new project run the command npm -i init (creates package.json file) on command prompt
4) to install cypress run the command
   npm install cypress --save -dev
5) to start cypress run the command
   npx cypress open



To run the tests in cypress run the following command in terminal ->
npx cypress run
This runs all the spec files in headless mode, i.e., without any UI. It runs the test and lets you know about the number of spec files passing and failing the cases.

