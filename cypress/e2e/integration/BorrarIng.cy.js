describe("Borrar ingrediente", () => {
    it("delete ingredient", () => {
        cy.visit("http://dinnersdevelop.s3-website.us-east-2.amazonaws.com")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
        cy.contains("Ingresar").click()
        cy.get('[data-testid="myIng"]').click()
        cy.wait(4000)
        cy.get('#Trigo').dblclick()
    })
})