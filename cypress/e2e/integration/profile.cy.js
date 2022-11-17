describe("login", () => {

    it("login user and click on profile", () => {
        cy.visit("http://dinnersdevelop.s3-website.us-east-2.amazonaws.com")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('[data-testid="profile"]').click()
        cy.contains("Sopa de Brócoli")
    })
})