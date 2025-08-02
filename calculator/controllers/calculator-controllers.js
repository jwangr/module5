export default class calculatorController {
    openCalculator(req, res) {
        res.send('Opening calculator!')

    }

    aboutCalculator(req, res) {
        res.send('About us!')
    }

    addNumbers(req, res) {
        console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let sum = num1 + num2;

        res.json({ result: sum });
    }

    subtractNumbers(req, res) {
        console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let total = num1 - num2;

        res.json({ result: total });
    }

    multiplyNumbers(req, res) {
        console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let total = num1 * num2;

        res.json({ result: total });
    }

    divideNumbers(req, res) {
        console.log(req.query); // http://localhost:3000/calculator/add?num1=4&num2=10 returns { num1: '4', num2: '10' }. Notice the string format
        let num1 = parseInt(req.query.num1);
        let num2 = parseInt(req.query.num2);
        let total = num1 / num2;

        res.json({ result: total });
    }
}