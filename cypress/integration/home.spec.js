describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1920,1080) // Formatação da tela
        cy.visit('https://buger-eats.vercel.app/') // site o qual será visitado
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //deve pegar e haver um texto: texto da h1
    })
})