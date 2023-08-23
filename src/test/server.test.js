import request from 'supertest';
import { expect } from 'chai';
import { app } from '../app.js';

describe('Test server connection', () => {

  it('It should return 404, when accessing an unknown endpoint', done => {
    request(app)
      .get('/unknown')
      .end((err, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it('It should return 200, when accessing /scrape endpoint', done => {
    request(app)
      .get('/db-test')
      .end((err, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
  });

});
