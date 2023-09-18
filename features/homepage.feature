Feature: Homepage feature

  Scenario Outline: As a user, I can view the homepage

    Given I am on the homepage 
    Then I should see a title heading containing Welcome to the-internet

Scenario: Click on A/B testing page

    Given I am on the homepage
    When I select the link with href attribute "/abtest"
    Then I should be redirected to a URL containing "abtest"

  Scenario: Click on add remove element attributes link

    Given I am on the homepage 
    When I select the link with href attribute "/add_remove_elements/"
    Then I should be redirected to a URL containing "add_remove_elements"


    
