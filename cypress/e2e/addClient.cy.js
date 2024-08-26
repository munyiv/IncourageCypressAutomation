import { login, clientDetails } from "../fixtures/TestData";
const { username, password, url } = login;
const { firstname, lastname, contactnumber, address, email, Username } =
  clientDetails;

describe("Add clients", () => {
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

  it("should be able to add clients", () => {
    cy.get("ul > :nth-child(2)").click();
    cy.xpath("/html/body/div/div/div/div/div[3]/div[2]/button").click();
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[1]").type(
      firstname
    );
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[2]").type(
      lastname
    );
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[3]").type(
      contactnumber
    );
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[4]").type(
      address
    );
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[5]").type(email);
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/input[6]").type(
      Username
    );
    // cy.xpath("/html/body/div/div/div/div/div[2]/div/form/button[1]").click();
    cy.intercept({
      method: "POST",
      url: "http://localhost:8000/addClient",
    }).as("createClient");
    cy.xpath("/html/body/div/div/div/div/div[2]/div/form/button[1]").click();
    cy.wait("@createClient").then((data) => {
      expect(data.response.statusCode, "Response Status Code").to.equal(200);
    });
  });
});
