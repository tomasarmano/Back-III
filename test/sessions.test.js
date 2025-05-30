import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Sessions API', () => {
  let testUserEmail = `testuser${Date.now()}@test.com`;
  let testUserPassword = 'coder123';

  it('POST /api/sessions/register - debe registrar un usuario', (done) => {
    chai.request(app)
      .post('/api/sessions/register')
      .send({
        email: testUserEmail,
        password: testUserPassword,
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message');
        done();
      });
  });

  it('POST /api/sessions/login - debe iniciar sesión y devolver token', (done) => {
    chai.request(app)
      .post('/api/sessions/login')
      .send({
        email: testUserEmail,
        password: testUserPassword,
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
