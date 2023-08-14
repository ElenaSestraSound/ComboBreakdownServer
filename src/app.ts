import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(ErrorHandler);

// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export { app };