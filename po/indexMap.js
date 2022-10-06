const LaunchPage = require('./LaunchPage');
const LoginPage = require('./LoginPage');
const LeftSideBar = require('./LeftSideBar');
const MainPage = require('./MainPage');



const launchPage = new LaunchPage();
const loginPage = new LoginPage();
const leftSideBar = new LeftSideBar();
const mainPage = new MainPage();


const IndexMap = {
    ...launchPage,
    ...loginPage,
    ...leftSideBar,
    ...mainPage
  };
  
  module.exports = IndexMap;