describe("Guardar", () => {

    it("Agregar una receta a favoritos", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.wait(4000)
        cy.get('#PolloconLoroco').click()
        cy.get('[data-testid="bookmark"]').click()
        cy.wait(4000)
        cy.contains("Pollo con Loroco")
        
    })

    it("Quitar una receta a favoritos", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('#PolloconLoroco').click()
    })
})

