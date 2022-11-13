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
        cy.get('[data-testid="recipe"]').click()
        cy.get("#titulo").type("Ceral con Leche")
        cy.get("#descripcion").type("Cereal con leche")
        cy.get("#ingredientes").click()
        cy.get('#iningre0').type("Cereal")
        cy.get('#incat0').type("16 oz")
        cy.get("#ingredientes").click()
        cy.get('#iningre1').type("Leche")
        cy.get('#incat1').type("1 litro")
        cy.get("#pasos").type("Servir el Cereal en un bowl y agregar leche")
        cy.contains("Elegir dificultad").click()
        cy.contains("Fácil").click()
        cy.get('#cat').type("Desayuno")
        cy.get('#publish').click()

    })

})