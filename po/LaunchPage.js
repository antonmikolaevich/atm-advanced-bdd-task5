const { $ } = require("@cucumber-e2e/po2");
const CertainLaunchPage = require('./CertainLaunchPage');

class LaunchPage {

    selector = '[class*="page-layout"]';

    FirstLaunch = $('[class*="grid-row-wrapper"]:nth-of-type(2)');
    FirstLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(2) [class*="main-info"] > a');
    SecondLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(3) [class*="main-info"] > a');
    ThirdLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(4) [class*="main-info"] > a');
    FourthLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(5) [class*="main-info"] > a');
    FifthLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(6) [class*="main-info"] > a');
    SixthLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(7) [class*="main-info"] > a');
    SeventhLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(8) [class*="main-info"] > a');
    EighthLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(9) [class*="main-info"] > a');
    NinethLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(10) [class*="main-info"] > a');
    TenthLaunchLink = $('[class*="grid-row-wrapper"]:nth-of-type(11) [class*="main-info"] > a');
    
    TotalColumn = $('[class*="header-cell"]:nth-of-type(4) [class*="title-full"]')
    PassedColumn = $('[class*="header-cell"]:nth-of-type(5) [class*="title-full"]');
    FailedColumn = $('[class*="header-cell"]:nth-of-type(6) [class*="title-full"]');
    SkippedColumn = $('[class*="header-cell"]:nth-of-type(7) [class*="title-full"]');
    ProductBugColumn = $('[class*="header-cell"]:nth-of-type(8) [class*="title-full"]');
    AutoBugColumn = $('[class*="header-cell"]:nth-of-type(9) [class*="title-full"]');
    SystemIssueColumn = $('[class*="header-cell"]:nth-of-type(10) [class*="title-full"]');
    ToInvestigateColumn = $('[class*="header-cell"]:nth-of-type(11) [class*="title-full"]');

    CertainLaunchPage = $(new CertainLaunchPage());
}

module.exports = LaunchPage;