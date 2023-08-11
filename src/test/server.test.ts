import request from 'supertest';
import { Server } from 'http';
import { app } from '../server';

let server: Server;

describe('GET /', () => {

  beforeAll(() => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  it('responds with "Hello World!"', (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .end((err, res) => {
        expect(res.text).toBe('Hello Arto!');
        if (err) return done(err);
        done();
      });
  }, 10000);
});
