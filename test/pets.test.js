import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Pets API', () => {
  it('GET /api/pets - debe obtener la lista de mascotas', (done) => {
    chai.request(app)
      .get('/api/pets')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

});
