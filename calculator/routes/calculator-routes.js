import { Router } from 'express'; // creates a route (an express component, via the express Router module)

const router = Router();

router.get('/', (req, res) => {
    res.send('Opening calculator!')
})

router.get('/add', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;

    res.json({result:sum});
})

router.get('/add', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;

    res.json({result:sum});
})

router.get('/add', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let total = num1 + num2;

    res.json({result:total});
})

router.get('/subtract', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let total = num1 - num2;

    res.json({result:total});
})

router.get('/multiply', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let total = num1 * num2;

    res.json({result:total});
})

router.get('/divide', (req, res) => {
    console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let total = num1 / num2;

    res.json({result:total});
})

router.get('/about', (req, res) => {
    res.send('About us!')
})

export default router;