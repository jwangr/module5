import express from 'express'; // import the express package
import friendRoutes from './routes/friendRoutes.js';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middleware/error-handler.js'

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerPath = join(__dirname, 'swagger.json');
const swaggerDocument = JSON.parse(readFileSync(swaggerPath, 'utf-8'));

const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', express.static('public'))
app.use('/friends', friendRoutes)
 app.use(errorHandler) // takes any errors that /friends generates

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
