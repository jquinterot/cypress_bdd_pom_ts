Feature: Demoblaze Order Management

  @regression @TC01
  Scenario: Check that a product can be added to the cart
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Samsung galaxy s6" product
    Then product "Samsung galaxy s6" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Samsung galaxy s6" is added to cart

  @regression @TC02
  Scenario: Check that an order can be placed
    Given I visit Demoblaze.com
    When selects "Phone" category
    And selects "Samsung galaxy s6" product
    Then product "Samsung galaxy s6" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Samsung galaxy s6" is added to cart
    When places the order
    Then thank you message is displayed
