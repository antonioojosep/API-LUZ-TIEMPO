import cors from "cors";
import express from 'express';
import { PORT } from './config/config.js';
import userRouter from './routes/userRouter.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});