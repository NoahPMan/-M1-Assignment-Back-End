import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware
app.use(express.json());

// Basic routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Express API!');
});

export default app;
