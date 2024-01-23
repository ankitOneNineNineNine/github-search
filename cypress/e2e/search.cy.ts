const baseUrl = "http://127.0.0.1:5173/";
describe("Given User is on root route", () => {
  describe("When user types something in search bar", () => {
    it("Then API is called and respective results are seen", () => {
      cy.visit(baseUrl);
      cy.intercept(
        "GET",
        `https://api.github.com/search/repositories?sort=forks&order=desc&q=Hello&page=1&per_page=10`,
        (req) => {
          return req.reply();
        },
      ).as("request");

      cy.get(`[aria-label="search"]`).type("Hello");
      cy.get(`[aria-label="spinner"]`).should("exist");
      cy.get(`[aria-label="page 1"]`).should("not.exist");

      cy.wait("@request");

      cy.get(`[aria-label="spinner"]`).should("not.exist");
      cy.get(`[aria-label="page 1"]`).should("exist");

      cy.get(`article>div>a`).first().should("exist");
    });

    describe("And clicked on one of repo header ", () => {
      it("Then user is moved to details page", async () => {
        cy.visit(baseUrl);

        cy.get(`[aria-label="search"]`).type("Hello");

        cy.get(`[aria-label="spinner"]`).should("not.exist");

        cy.get(`article>div>a`).first().click();

        /**
         * Details Page is shown
         */
        cy.get(`[aria-label="details"]`).should("exist");
      });
    });
    describe("And user clicks certain page number", () => {
      it("Then user is moved to respective page", () => {
        cy.visit(baseUrl);

        cy.get(`[aria-label="search"]`).type("Hello");

        /**
         * Page 3 button is enabled
         */
        cy.get(`[aria-label="page 3"]`).should("not.be.disabled");

        cy.get(`[aria-label="page 3"]`).click();

        /*
         User moved to page 3 hence page 3 is disabled
        */
        cy.get(`[aria-label="page 3"]`).should("be.disabled");
      });
    });
  });
});
