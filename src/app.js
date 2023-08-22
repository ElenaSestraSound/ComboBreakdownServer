import express from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler.js';
import { router } from './router.js';
import { prisma } from './prisma/client.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// test
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// test database connection
app.get('/db-test', async (req, res) => {
  try {
    const user = await prisma.character.findFirst();
    console.log('Database connected');
    res.send('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database', error);
    res.status(500).send('Error connecting to the database');
  }
});

app.use(ErrorHandler);

export { app };