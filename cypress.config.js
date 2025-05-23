const { defineConfig } = require("cypress");
require('dotenv').config(); // Load environment variables from .env file

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.email = process.env.CYPRESS_email;
      config.env.password = process.env.CYPRESS_password;
      return config;
    },
    baseUrl: 'https://mailfence.com'
  },
  experimentalStudio: true,
  viewportWidth: 2560,
  viewportHeight: 1440,
});
