import test from 'ava';
import request from 'supertest';
import { app } from '../app.js';

test('It should respond to the GET method on root path', async t => {
    const response = await request(app).get('/');
    
    t.is(response.statusCode, 200);
});