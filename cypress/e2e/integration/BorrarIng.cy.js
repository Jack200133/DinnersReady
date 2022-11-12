describe("Borrar ingrediente", () => {
    it("delete ingredient", () => {
        cy.visit("http://localhost:19006/")
        cy.contains("Dinner's Ready")
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('[data-testid="myIng"]').click()
        cy.wait(4000)
        cy.get('#Trigo').dblclick()
    })
})