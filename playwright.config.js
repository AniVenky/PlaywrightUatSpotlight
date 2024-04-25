// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { config } = require('process');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout : 50*1000,
  expect :{
    timeout: 5000,
  },
  /* Run tests in files in parallel */
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
      browserName : 'chromium',
      headless : false,



  },

  /* Configure projects for major browsers */
  
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
}); 

