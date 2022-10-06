const { $, $$ } = require("@cucumber-e2e/po2");

class CertainLaunchPage {
    selector = '[class*="page-layout"]'

    FirstSuite = $('[class*="grid-row-wrapper"]:nth-of-type(2)');
    ColumnItems = $$('[class*="header-cell"] [class*="title-full"]');
    LaunchTotalColumn = $('[class*="header-cell"]:nth-of-type(3) [class*="title-full"]')
    LaunchPassedColumn = $('[class*="header-cell"]:nth-of-type(4) [class*="title-full"]');
    LaunchFailedColumn = $('[class*="header-cell"]:nth-of-type(5) [class*="title-full"]');
    LaunchSkippedColumn = $('[class*="header-cell"]:nth-of-type(6) [class*="title-full"]');
    LaunchProductBugColumn = $('[class*="header-cell"]:nth-of-type(7) [class*="title-full"]');
    LaunchAutoBugColumn = $('[class*="header-cell"]:nth-of-type(8) [class*="title-full"]');
    LaunchSystemIssueColumn = $('[class*="header-cell"]:nth-of-type(9) [class*="title-full"]');
    LaunchToInvestigateColumn = $('[class*="header-cell"]:nth-of-type(10) [class*="title-full"]');
}

module.exports = CertainLaunchPage;