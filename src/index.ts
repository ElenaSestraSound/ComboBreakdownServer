import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';

const app: Express = express();
const PORT: string = process.env.PORT || '3000';

app.use(express.json());

app.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`Server listening on port ${PORT}`);
});
