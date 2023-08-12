import request from 'supertest';
import { app } from '../app';


describe('Test server connection', () => {
  
  test('It should return 404, when accessing an unknown endpoint', done => {
    request(app)
      .get('/unknown')
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test('It should return 200, when accessing /scrape endpoint', done => {
    request(app)
      .get('/scrape')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});