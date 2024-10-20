Feature: Navigate to Careers and subscribe to the news
    as a user, I want to be able to navigate to  careers page and subscribe to the news
@focus @regression
    Scenario: Subscribe to the news
        Given I navigate to careers page        
        When I enter my email
        And I check the checkbox
        When I hit Submit
        Then I see the red confirmation message



