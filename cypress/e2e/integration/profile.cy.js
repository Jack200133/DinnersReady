describe("login", () => {
    it("reaches login page", () => {
        cy.visit("http://localhost:19006/")
        cy.contains("Dinner's Ready")
    })

    it("login user and click on profile", () => {
        cy.visit("http://localhost:19006/")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('[data-testid="profile"]').click()
        cy.contains("Sopa de Brócoli")
    })
})