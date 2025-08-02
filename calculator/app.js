import express from 'express';
import calculatorRoutes from './routes/calculator-routes.js';

const app = express(); // creates an express application
const port = 3000;

// Middlewares: app.use

// serve static content (named index.html), via 'public' folder
app.use('/', express.static('public'))
app.use('/calculator', calculatorRoutes);

// export app so that it doesn't run twice; i.e. with npm start and npm test
export default app;
