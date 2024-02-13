Feature: duckduckgo.com
  @foo
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar

  @test
  Scenario: test tag
    When I visit duckduckgo.com
    Then I should see a search bar