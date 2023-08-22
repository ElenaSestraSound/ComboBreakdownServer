import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';
import { router } from './router';
import { prisma } from './prisma/client.js'

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);


// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// test database connection
app.get('/db-test', async (req: Request, res: Response) => {
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