import { login } from "../fixtures/TestData";
const { username, password, url } = login;

describe("should get the login url", () => {
  it("log in with admin creds", () => {
    cy.visit(url);
    cy.wait(3000);
  });

  it("should fill in the log in details", () => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    // cy.get(".bg-red-500").click();
    cy.xpath("/html/body/div/div/div/div/div[2]/form/div[3]/button").click();
  });
});
