import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { app } from '../app.js';

chai.use(sinonChai);

const { expect } = chai;
const server = supertest(app);  // or supertest.agent(app) if you need session features

export { expect, server };
