const { $ } = require('@cucumber-e2e/po2');

class LoginForm {

    selector = 'div[class*="login-page-content"]';
  
    LoginField = $('input[placeholder="Login"]');
    PasswordField = $('input[placeholder="Password"]');
    LoginButton = $('button[type="submit"]');
  
  }


module.exports = LoginForm;  