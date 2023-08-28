import test from 'ava';
import request from 'supertest';
import { app } from '../app.js';

test('It should return 404 when accessing an unknown endpoint', async t => {
    const response = await request(app).get('/unknown');
    t.is(response.statusCode, 404);
});

test('It should return 200 when accessing /db-test endpoint', async t => {
    const response = await request(app).get('/db-test');
    t.is(response.statusCode, 200);
});