describe("recipe views", () => {

    it("access recipe view", () => {
        cy.visit("http://dinnersdevelop.s3-website.us-east-2.amazonaws.com")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('#1').click()
    })
})