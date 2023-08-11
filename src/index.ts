import express, { Express, Request, Response } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';

const app: Express = express();

dotenv.config();

const PORT: string = String(process.env.PORT!);

// app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
