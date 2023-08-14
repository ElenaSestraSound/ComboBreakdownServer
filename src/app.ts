import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export { app };