describe('home page', () => {
    it('app deve estar online', () => {
        cy.visit('/') // site o qual será visitado
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //deve pegar e haver um texto: texto da h1
    })
})