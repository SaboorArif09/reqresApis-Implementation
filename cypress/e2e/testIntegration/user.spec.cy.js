describe('Users API', () => {
    beforeEach(() => {
      cy.visit('https://reqres.in')
    })
  
    it('Get a list of users', () => {
      cy.request('GET', '/api/users')
       .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body.data).to.be.an('array')
        })
    })
  
    it('Get a single user', () => {
      cy.request('GET', '/api/users/2')
       .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body.data.id).to.eq(2)
        })
    })

    it('Get a single user not found', () => {
      cy.request('GET', '/api/users/23')
        .should((response) => {
          expect(response.status).to.eq(404)
          expect(response.body).to.have.property('error')
        })
    })
  
    it('Create a new user', () => {
      const body = {
        name: 'John',
        job: 'Leader',
      };
  
      cy.request('POST', '/api/users', body).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('name', 'John');
        expect(response.body).to.have.property('job', 'Leader');
      });
    });
  
    it('Update an existing user', () => {
      const body = {
        name: 'Jane',
        job: 'Manager',
      };
  
      cy.request('PUT', '/api/users/2', body).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('name', 'Jane');
        expect(response.body).to.have.property('job', 'Manager');
      });
    });
  
    it('Delete a user', () => {
      cy.request('DELETE', '/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
        expect(response.body).to.be.empty;
      });
    });

    it('Get users with delay', () => {
      const startTime = new Date().getTime();
      cy.request('GET', 'api/users?delay=3').then((response) => {
        const endTime = new Date().getTime();
        const delay = endTime - startTime;
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        expect(delay).to.be.greaterThan(2900);
      });
    });
  })