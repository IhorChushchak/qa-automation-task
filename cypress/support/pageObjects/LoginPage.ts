class LoginPage {
    visit() {
      cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    }
  
    getUsernameField() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordField() {
      return cy.get('input[name="password"]');
    }
  
    getLoginButton() {
      return cy.get('input[type="submit"]');
    }
  
    getErrorMessage() {
      return cy.get('span[class="help-block"]');
    }
  
    login(username: string, password: string) {
      this.getUsernameField().type(username);
      this.getPasswordField().type(password);
      this.getLoginButton().click();
    }
  }
  
  export default LoginPage;