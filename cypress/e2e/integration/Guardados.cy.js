describe("login", () => {

    it("login user", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get("#password").type("Prueba")
        cy.get("#Pollo con Lorocoguardado").click()
        cy.contains("bookmark").click()
        cy.contains("Pollo con Loroco")
        cy.get("#Pollo con Lorocoguardado").click()


    })
})