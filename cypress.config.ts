import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos"
});