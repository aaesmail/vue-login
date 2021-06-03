describe('Test the login form with valid/invalid credentials', () => {
  beforeEach(() => {
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('email')).to.be.null
    })
  })

  it('Scenario 1: Tries an invalid email + any password', () => {
    cy.visit('/login')

    cy.get('#email-input').type('ali@instabug.com')
    cy.get('#password-input').type('asdasdA1231')

    cy.get('#login-button').click()

    cy.get('div.fail-message').should(
      'contain',
      'Your email and/or password are incorrect'
    )
  })

  it('Scenario 2: Tries a valid email + invalid password', () => {
    cy.visit('/login')

    cy.get('#email-input').type('mohamed@instabug.com')
    cy.get('#password-input').type('asdasdA1231')

    cy.get('#login-button').click()

    cy.get('div.fail-message').should(
      'contain',
      'Your email and/or password are incorrect'
    )
  })

  it('Scenario 3: Tries a valid email + valid password', () => {
    cy.visit('/login')

    cy.get('#email-input').type('mohamed@instabug.com')
    cy.get('#password-input').type('aA12345678')

    cy.get('#login-button').click()

    cy.location('pathname').should('eq', '/welcome')
  })

  it('Scenario 4: Not valid email address + check error message + check red border', () => {
    cy.visit('/login')

    cy.get('#email-input').type('dddd').blur()

    cy.get('#email-input-error-message').should(
      'contain',
      'Enter a valid email address.'
    )
    cy.get('#email-input-error-message').should('have.class', 'error-text')
    cy.get('#email-input-error-message').should(
      'have.css',
      'color',
      'rgb(255, 0, 0)'
    )

    cy.get('#email-input').should('have.class', 'error')
    cy.get('#email-input').should(
      'have.css',
      'border',
      '1px solid rgb(255, 0, 0)'
    )
  })
})
