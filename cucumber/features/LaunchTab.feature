Feature: Launch Tab

    Background:
        Given I login
        Then Element "Left Side Bar > Launch Tab" should be visible


    @test
    Scenario Outline: Verify that Launch tab contains expected data in certain column "<columnName>" 
        When I click "Left Side Bar > Launch Tab"
        Then Element "Launch Page > First Launch" should be visible 
        When I remember "Launch Page > <columnName>" value as "actualColumnName"
        Then Stored text "$actualColumnName" should be equal to "<expectedText>"

    Examples:
        |columnName           |expectedText  |
        |Total Column         |TOTAL         |
        |Passed Column        |PASSED        |
        |Failed Column        |FAILED        |
        |Skipped Column       |SKIPPED       |
        |Product Bug Column   |PRODUCT BUG   |
        |Auto Bug Column      |AUTO BUG      |
        |System Issue Column  |SYSTEM ISSUE  |
        |To Investigate Column|TO INVESTIGATE|

    
    Scenario Outline: Verify that First Launch in Launch tab contains expected data "<expectedText>" in certain column "<columnName>" 
        When I click "Left Side Bar > Launch Tab"
        Then Element "Launch Page > First Launch" should be visible
        When I click "Launch Page > First Launch Link"
        Then Element "Certain Launch Page > First Suite" should be visible
        When I remember "Certain Launch Page > <columnName>" value as "actualColumnName"
        Then Stored text "$actualColumnName" should be equal to "<expectedText>"

    Examples:
        |columnName                  |expectedText  |
        |Launch Total Column         |TOTAL         |
        |Launch Passed Column        |PASSED        |
        |Launch Failed Column        |FAILED        |
        |Launch Skipped Column       |SKIPPED       |
        |Launch Product Bug Column   |PRODUCT BUG   |
        |Launch Auto Bug Column      |AUTO BUG      |
        |Launch System Issue Column  |SYSTEM ISSUE  |
        |Launch To Investigate Column|TO INVESTIGATE|

    
    Scenario: Verify that test suites contain expected data for any test run "<launchNumber>"    
        When I click "Left Side Bar > Launch Tab"
        Then Element "Launch Page > First Launch" should be visible
        When I click "Launch Page > <launchNumber>"
        Then Element "Certain Launch Page > First Suite" should be visible
         And Texts of "Certain Launch Page > Column Items" should be equal to "$COLUMN_NAMES_LIST"  

    Examples:
        |launchNumber     |
        |FirstLaunchLink  | 
        |SecondLaunchLink |
        |ThirdLaunchLink  |
        |FourthLaunchLink |
        |FifthLaunchLink  |
        |SixthLaunchLink  |
        |SeventhLaunchLink|
        |EighthLaunchLink |
        |NinethLaunchLink |
        |TenthLaunchLink  |
