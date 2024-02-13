Feature: Demoblaze Order Management

  @regression @TC01
  Scenario: Check that a product can be added to the cart
    Given I visit Demoblaze.com
    When selects Phone category
    And selects Samsung Galaxy S6 product
    Then Samsung Galaxy S6 is displayed in product summary page
    When adds the Samsung Galaxy S6 to the cart
    And goes to cart
    Then Samsung Galaxy S6 is added to cart

 @regression @TC02
  Scenario: Check that an order can be placed
    Given I visit Demoblaze.com
    When selects Phone category
    And selects Samsung Galaxy S6 product
    Then Samsung Galaxy S6 is displayed in product summary page
    When adds the Samsung Galaxy S6 to the cart
    And goes to cart
    Then Samsung Galaxy S6 is added to cart
    When places the order
    Then thank you message is displayed