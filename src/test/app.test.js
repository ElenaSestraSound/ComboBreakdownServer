import request from 'supertest';
import { expect } from 'chai';
import { app } from '../app.js';

describe('Test the root path', () => {

  it('It should respond to the GET method', done => {
    request(app)
      .get('/')
      .end((err, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
  });

});
