import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';
import path from 'path';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Upload API', () => {
  it('POST /api/upload debe subir un archivo', (done) => {
    chai.request(app)
      .post('/api/upload')
      .set('Content-Type', 'multipart/form-data')
      .attach('file', path.resolve('./test/dummy-file.txt'), 'dummy-file.txt')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Archivo subido con éxito');
        done();
      });
  });
});
