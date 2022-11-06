describe("login", () => {
    it("reaches login page", () => {
        cy.visit("http://localhost:19006/")
        cy.contains("Dinner's Ready")
    })

    it("login user", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.contains("Pollo con Loroco")
    })
})