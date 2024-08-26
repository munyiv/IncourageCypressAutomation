// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportWidth: 1920,
  viewportWidth: 1367,
  viewportHeight: 768,

  // viewportHeight: 1080,
  browser: "chrome",
  defaultCommandTimeout: 90000,
  chromeWebSecurity: false,
  env: {
    CYPRESS_COOKIE_PRESET: "preserveAll",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
  headless: true,
  video: false,
  retries: 2,
});
