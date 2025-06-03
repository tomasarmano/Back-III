import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Usuarios API', () => {
  it('GET /api/users debería devolver todos los usuarios', (done) => {
    chai.request(app)
      .get('/api/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /api/users debería crear un nuevo usuario', (done) => {
    const newUser = {
      email: 'test@example.com',
      password: '123456',
      firstName: 'Test',
      lastName: 'User'
    };

    chai.request(app)
      .post('/api/users')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        expect(res.body.email).to.equal(newUser.email);
        done();
      });
  });
});
