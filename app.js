import express from 'express';
import mocksRouter from './src/routes/mocks.router.js';

const app = express();

app.use(express.json());
app.use('/api/mocks', mocksRouter);

export default app;
