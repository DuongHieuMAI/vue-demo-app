describe('Home Page', () => {
  it('has the correct title and heading', () => {
    cy.visit('/')
    cy.title().should('equal', 'Home | Vue Enterprise Boilerplate')
    cy.get('img')
  })
})
