import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "",
  viewportWidth: 1440,
  viewportHeight: 900,
  retries: {
    runMode: 2,
    openMode: 2,
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
