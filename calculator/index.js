import express from 'express';
import calculatorRoutes from './routes/calculator-routes.js';

const app = express(); // creates an express application
const port = 3000;

// Middlewares: app.use

// serve static content (named index.html), via 'public' folder
app.use('/', express.static('public'))
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})