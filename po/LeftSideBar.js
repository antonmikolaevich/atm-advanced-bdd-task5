const { $ } = require("@cucumber-e2e/po2");

class LeftSideBar {

    selector = '[class*="top-block"]';

    LaunchTab = $('[class*="sidebarButton"] a[href*="launches"]');

}

module.exports = LeftSideBar;