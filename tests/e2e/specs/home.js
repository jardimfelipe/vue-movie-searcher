describe('Home Page', () => {
  it('Contains basic elements', () => {
    cy.visit('/');
    cy.contains('#search-button', 'Buscar');
  });
  it('Can interate with elements', () => {
    cy.visit('/');
    cy.get('#search-input').type('Die Hard');
    cy.server();
    cy.route('/').as('getMovieList');
    cy.get('#search-button').click();
    setTimeout(() => {
      cy.contains('#movies-list');
    }, 1000);
  });
});
