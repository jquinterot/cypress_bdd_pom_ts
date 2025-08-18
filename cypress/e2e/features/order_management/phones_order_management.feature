Feature: Demoblaze Phones Order Management

  @regression @TC01 @smoke
  Scenario: Check that a Galaxy S6 product can be added to the cart
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Samsung galaxy s6" product
    Then product "Samsung galaxy s6" with price "360" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Samsung galaxy s6" is added to cart

  @regression @TC02
  Scenario: Check that an order with a Galaxy S6 product can be placed
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Samsung galaxy s6" product
    Then product "Samsung galaxy s6" with price "360" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Samsung galaxy s6" is added to cart
    When deletes product
    Then product "Samsung galaxy s6" is deleted
    When places the order
    Then thank you message is displayed

  @regression @TC03
  Scenario: Check that a Nexus 6 product can be added to the cart
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Nexus 6" product
    Then product "Nexus 6" with price "650" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Nexus 6" is added to cart

  @regression @TC04
  Scenario: Check that an order with a Nexus 6 product can be placed
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Nexus 6" product
    Then product "Nexus 6" with price "650" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Nexus 6" is added to cart
    When deletes product
    Then product "Nexus 6" is deleted
    When places the order
    Then thank you message is displayed
