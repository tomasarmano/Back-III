import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Mocks API', () => {
  it('GET /api/mocks/users debería devolver un array de usuarios mock', (done) => {
    chai.request(app)
      .get('/api/mocks/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });

  it('GET /api/mocks/pets debería devolver un array de mascotas mock', (done) => {
    chai.request(app)
      .get('/api/mocks/pets')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });

  it('POST /api/mocks/users debería insertar usuarios mock en BD', (done) => {
    chai.request(app)
      .post('/api/mocks/users')
      .send({ quantity: 5 })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('insertedCount');
        expect(res.body.insertedCount).to.equal(5);
        done();
      });
  });

  it('POST /api/mocks/pets debería insertar mascotas mock en BD', (done) => {
    chai.request(app)
      .post('/api/mocks/pets')
      .send({ quantity: 5 })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('insertedCount');
        expect(res.body.insertedCount).to.equal(5);
        done();
      });
  });
});
