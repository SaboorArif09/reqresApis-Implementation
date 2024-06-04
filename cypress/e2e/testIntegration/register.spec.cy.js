describe('Register API', () => {
    beforeEach(() => {
      cy.visit('https://reqres.in')
    })
  
    it('Register a new user', () => {
      cy.request('POST', '/api/register', {
        email: "eve.holt@reqres.in",
        password: "pistol"
      })
      .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body.token).to.be.a('string')
        })
    })
  
    it('Register - unsuccessful', () => {
      cy.request('POST', '/api/register', {
        email: 'doe@gmail.com',
        password: ''
      })
      .should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body).to.have.property('error')
        })
    })  
  })