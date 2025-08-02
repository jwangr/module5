import { Router } from 'express'; // creates a route (an express component, via the express Router module)

const router = Router();

import calcController from '../controllers/calculator-controllers.js';
const calculatorController = new calcController();

router.get('/', (req, res) => {
    calculatorController.openCalculator(req, res);
})

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res);
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res);
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})

router.get('/about', (req, res) => {
    calculatorController.aboutCalculator(req, res);
})

export default router;