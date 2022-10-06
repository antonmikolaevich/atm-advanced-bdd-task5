const { $ } = require('@cucumber-e2e/po2');
const LoginForm = require('./LoginForm');

class LoginPage {

  LoginForm = $(new LoginForm());

}

module.exports = LoginPage;