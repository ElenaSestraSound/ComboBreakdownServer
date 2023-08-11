import express, { Express, Request, Response } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';

const app: Express = express();

dotenv.config();

const PORT: string = process.env.PORT || '3000';

// app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello Arto!');
});


app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
