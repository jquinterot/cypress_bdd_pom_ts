// Cypress 15 Configuration
// Version: 15.10.0
// Updated: 2026-02-19
// Key features: Improved test runner UX, better cross-origin handling with cy.origin()
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as path from "path";
import { register } from "tsconfig-paths";

register({
  baseUrl: path.join(__dirname, "."),
  paths: {
    "@pages/*": ["cypress/pages/*"],
    "@actions/*": ["cypress/actions/*"],
    "@step_definitions/*": ["cypress/e2e/step_definitions/*"],
    "@helpers/*": ["cypress/helpers/*"],
    "@support/*": ["cypress/support/*"],
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    // Cypress 15: Project configuration
    projectId: "c8uj3v",
    baseUrl: "https://www.demoblaze.com/",
    specPattern: "**/**/**/*.feature",
    setupNodeEvents,
    
    // Cypress 15: Performance & Stability
    experimentalRunAllSpecs: false,
    chromeWebSecurity: false,
    
    // Cypress 15: Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Cypress 15: Recording settings
    video: false,
    screenshotOnRunFailure: true,
    
    // Cypress 15: Timeout settings
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
  },
});
