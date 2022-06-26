describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('ng-fukuoka');
    cy.contains('Angular Community in Fukuoka');
  });
});
