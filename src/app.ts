import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';
import { router } from './scraper/routes';
import { prisma } from './prisma/client'

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);

// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



async function main() {
  console.log('database connected');
}

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

app.use(ErrorHandler);

export { app };