import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import reviewRouter from './src/routes/reviewRoutes';
const app: Application = express();

(function () {
  try {
    process.addListener('uncaughtException', err => {
      console.error('Uncaught Exception:', err);
    });
    process.addListener('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    app.use(cors());
    app.use(express.json());

    app.use('/api/v1/reviews', reviewRouter);

    app.get('/health', (_: Request, res: Response) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();
