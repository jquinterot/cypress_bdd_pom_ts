Feature: Demoblaze Laptops Order Management

  @regression @TC05
  Scenario: Check that Sony Vaio i7 product can be added to the cart
    Given I visit Demoblaze.com
    When selects "Laptop" category
    And selects "Sony vaio i7" product
    Then product "Sony vaio i7" with price "790" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Sony vaio i7" is added to cart

  @regression @TC06
  Scenario: Check that an order with Sony Vaio i7 product can be placed
    Given I visit Demoblaze.com
    When selects "Laptop" category
    And selects "Sony vaio i7" product
    Then product "Sony vaio i7" with price "790" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "Sony vaio i7" is added to cart
    When deletes product
    Then product "Samsung galaxy s6" is deleted
    When places the order
    Then thank you message is displayed

  @regression @TC07
  Scenario: Check that an order with MacBook air product can be placed
    Given I visit Demoblaze.com
    When selects "Laptop" category
    And selects "MacBook air" product
    Then product "MacBook air" with price "700" is displayed in product page
    When adds the product to the cart
    And goes to cart
    Then product "MacBook air" is added to cart
    When deletes product
    Then product "MacBook air" is deleted
    When places the order
    Then thank you message is displayed
