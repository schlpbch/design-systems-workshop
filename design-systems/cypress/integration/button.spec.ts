describe('The ButtonComponent', () => {
  it('Checks that the button element exists and is visible', () => {
    cy.visitComponentStory('button', 'default-button');
    cy.get('app-button').should('exist');
    cy.get('app-button').should('be.visible');
  });
});
