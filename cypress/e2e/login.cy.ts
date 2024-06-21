/// <reference types="cypress" />

import LoginPage from '../support/pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Login Page Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should display all elements on the page', () => {
    loginPage.getUsernameField().should('be.visible');
    loginPage.getPasswordField().should('be.visible');
    loginPage.getLoginButton().should('be.visible');
  });

  it('should display error messages for invalid login', () => {
    cy.fixture('invalidCredentials').then((invalidCredentials) => {
      invalidCredentials.forEach((credentials) => {
        loginPage.login(credentials.username, credentials.password);
        loginPage.getErrorMessage().should('be.visible');
      });
    });
  });

  it('should fail due to unsuccessful login', () => {
    loginPage.login('invalidUser', 'invalidPassword');
    loginPage.getErrorMessage().should('be.visible');
  });
});
