import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';
import { router } from './scraper/routes';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(ErrorHandler);

// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export { app };