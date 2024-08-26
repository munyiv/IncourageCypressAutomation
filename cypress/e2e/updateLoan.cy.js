import { login, clientDetails } from "../fixtures/TestData";
const { username, password, url } = login;

describe("Add clients", () => {
  it("log in with admin creds", () => {
    cy.visit(url);
    cy.wait(3000);
  });

  it("should fill in the log in details", () => {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.xpath("/html/body/div/div/div/div/div[2]/form/div[3]/button").click();
  });
  it("update loan info", () => {
    cy.xpath(
      "/html/body/div/div/div/div/div[2]/div[3]/div[2]/div/div/div/table/tbody/tr/td[3]/button"
    ).click();
    cy.xpath("/html/body/div/div/div/div/div[3]/div[3]/form/div[3]/input")
      .should("exist") // Wait for the element to exist in the DOM
      .and("be.visible")
      .type("4500");
    cy.xpath("/html/body/div/div/div/div/div[3]/div[3]/form/div[4]/input")
      .should("be.visible")
      .type("4000");
    cy.xpath(
      "/html/body/div/div/div/div/div[3]/div[3]/form/div[2]/select"
    ).click();
    cy.xpath(
      "/html/body/div/div/div/div/div[3]/div[3]/form/div[2]/select/option[3]"
    ).click();
    // cy.xpath(
    //   "/html/body/div/div/div/div/div[3]/div[3]/form/div[9]/button"
    // ).click();
  });
});
