const { $ } = require('@cucumber-e2e/po2');
const LeftSideBar = require('./LeftSideBar');
const LaunchPage = require('./LaunchPage');
const CertainLaunchPage = require('./CertainLaunchPage');

class MainPage {

    LeftSideBar = $(new LeftSideBar());
    LaunchPage = $(new LaunchPage());
    CertainLaunchPage = $(new CertainLaunchPage());
}

module.exports = MainPage;