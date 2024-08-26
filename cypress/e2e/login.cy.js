describe('Login Form Test Cases', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Submitting without  password displays an error', () => {
    cy.get('input[name="email"]').type('nandha@mail.com');
    cy.get('form').submit();
    cy.get('#password_err').should('contain', 'Password is required');
  });

  it('Submitting with invalid email displays an error', () => {
      cy.get('input[name="email"]').type('nandha.com');
      cy.get('form').submit();
      cy.get('#mail_err').should('contain', 'Invalid email');
    });

  it('Submitting without an email displays an error', () => {
    cy.get('input[name="password"]').type('nandha@123');
    cy.get('form').submit();
    cy.get('#mail_err').should('contain', 'Email is required');
  });

  it('Submitting with invalid  password displays an error', () => {
      cy.get('input[name="password"]').type('qwerty');
      cy.get('form').submit();
      cy.get('#password_err').should('contain', 'Password must have minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character');
    });

  it('Submitting with both valid email and password displays a success message', () => {
    cy.get('input[name="email"]').type('nandha@mail.com');
    cy.get('input[name="password"]').type('nandha@123');
    cy.get('form').submit();
    cy.get('#success_msg').should('contain', 'Successfully logged in');
  });

});
