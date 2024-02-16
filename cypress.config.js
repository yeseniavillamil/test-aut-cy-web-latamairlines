const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 30000,
    baseUrl: 'https://www.latamairlines.com',
    chromeWebSecurity: false,
    uncaughtException: false,
    
    retries: {
      // retry cypress run
      runMode: 3,
      // retry cypress open
      openMode: 3
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
