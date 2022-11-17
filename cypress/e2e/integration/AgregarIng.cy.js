describe("agregar ingrediente", () => {
    it("Login user", () => {
        cy.visit("http://dinnersdevelop.s3-website.us-east-2.amazonaws.com")
        cy.contains("Dinner's Ready")
        cy.visit("http://dinnersdevelop.s3-website.us-east-2.amazonaws.com")
        cy.get("#usuario").type("Aristondo01")
        cy.get("#password").type("Prueba")
    })
    
    it("Adds ingredient", () => {
        cy.contains("Ingresar").click()
        cy.get('[data-testid="myIng"]').click()
        cy.get('[data-testid="addIng"]').click()
        cy.wait(4000)
        cy.get('#botonCereales').click()
        cy.contains('Trigo').click()
    })
})