Feature: Add remove elements feature

  Scenario Outline: As a user, I can click on add and delete element on the add delete element page

    Given I am on the add remove elements page
    When I select add element
    Then I should the element has been added to the page

# Scenario: Delete element

#     Given I am on the add remove elements page
#     And I select add element
#     When I select delete element
#     Then I should see the element has been removed from the page
