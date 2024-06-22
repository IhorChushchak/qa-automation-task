/// <reference types="cypress" />

import LoginPage from '../support/pageObjects/LoginPage';
import * as chai from 'chai';

const loginPage = new LoginPage();
const assert = chai.assert;

describe('Login Page Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should display all elements on the page', () => {
    loginPage.getUsernameField().should('be.visible').then($el => {
      assert.isNotNull($el, 'Username field is visible');
    });
    loginPage.getPasswordField().should('be.visible').then($el => {
      assert.isNotNull($el, 'Password field is visible');
    });
    loginPage.getLoginButton().should('be.visible').then($el => {
      assert.isNotNull($el, 'Login button is visible');
    });
  });

  it('should display error messages for invalid login', () => {
    cy.fixture('invalidCredentials').then((invalidCredentials) => {
      invalidCredentials.forEach((credentials) => {
        loginPage.login(credentials.username, credentials.password);
        loginPage.getErrorMessage().should('be.visible').then($el => {
          assert.include($el.text(), 'No account found with that username.', 'Error message is visible and correct');
        });
      });
    });
  });

  it('should fail due to unsuccessful login', () => {
    loginPage.login('invalidUser', 'invalidPassword');
    loginPage.getErrorMessage().should('be.visible').then($el => {
      assert.include($el.text(), 'No account found with that username.', 'Error message is visible and correct');
    });
  });
});