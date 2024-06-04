describe('Login API', () => {
    beforeEach(() => {
      cy.visit('https://reqres.in')
    })
  
    it('Login with valid credentials', () => {
      cy.request('POST', '/api/login', {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
      .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body.token).to.be.a('string')
        })
    })

    it('Login - unsuccessful', () => {
      cy.request('POST', '/api/login', {
        email: 'doe@gmail.com',
        password: ''
      })
      .should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body).to.have.property('error')
        })
    }) 
})