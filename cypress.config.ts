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

const getEnvUrl = (): string => {
  const env = process.env.CYPRESS_ENV || "prod";
  const envUrls: Record<string, string> = {
    dev: "https://dev.demoblaze.com/",
    staging: "https://staging.demoblaze.com/",
    prod: "https://www.demoblaze.com/",
  };
  return envUrls[env] || envUrls.prod;
};

export default defineConfig({
  e2e: {
    projectId: "c8uj3v",
    baseUrl: getEnvUrl(),
    specPattern: "**/**/**/*.feature",
    setupNodeEvents,

    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,

    experimentalRunAllSpecs: false,
  },
});