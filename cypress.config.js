const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wxw4rd',
  e2e: {
    setupNodeEvents(on, config) {
       // implement node event listeners here
    },
  },
  env: {
    apiUrl: "https://admin:admin@the-internet.herokuapp.com/"
  }
});
