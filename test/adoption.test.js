import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Adoptions API', () => {
  it('GET /adoptions debe devolver 200 y un array', async () => {
    const res = await chai.request(app).get('/adoptions');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });
});
