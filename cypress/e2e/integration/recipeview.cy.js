describe("recipe views", () => {

    it("access recipe view", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('#1').click()
    })
})