import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

const PORT: string = process.env.PORT || '3000';

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});