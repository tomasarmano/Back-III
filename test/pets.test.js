import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Mascotas API', () => {
  it('GET /api/pets debería devolver todas las mascotas', (done) => {
    chai.request(app)
      .get('/api/pets')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /api/pets debería crear una nueva mascota', (done) => {
    const newPet = {
      name: 'Firulais',
      species: 'perro',
      age: 3
    };

    chai.request(app)
      .post('/api/pets')
      .send(newPet)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal(newPet.name);
        done();
      });
  });
});
