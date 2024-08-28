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
    cy.get("#status").select("Pending");
    cy.get("#type").select("Salary Loan");
    cy.get("#terms").select("2 Months");
    //   cy.get("button.text-center").click();

    cy.intercept({
      method: "PATCH",
      url: "http://localhost:8000/loans/2",
    }).as("updateLoan");
    cy.get("button.text-center").click();

    cy.wait("@updateLoan").then((data) => {
      expect(data.response.statusCode, "Response Status Code").to.equal(200);
    });
  });
});
