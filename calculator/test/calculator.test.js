import app from '../app.js';
import { expect } from 'chai'
import request from 'supertest'

// describe('Calculator Routes', () => {
//     // generate some random numbers to test the calculator
//     let number1 = Math.floor(Math.random() * 1_000_000);
//     let number2 = Math.floor(Math.random() * 1_000_000);

//     test('GET /calculator/add => sum of numbers', () => {
//         return request(app).get(`/calculator/add?num1=${number1}&num2=${number2}`)
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).to.equal({
//                     result: (number1 + number2)
//                 })
//             })
//     })
// })

describe('GET /add, ', () => {
    it('should add two numbers', async () => {
        // generate some random numbers to test the calculator
        let number1 = Math.floor(Math.random() * 1_000_000);
        let number2 = Math.floor(Math.random() * 1_000_000);

        const res = await request(app).get(`/calculator/add?num1=${number1}&num2=${number2}`)
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('result', number1+number2)
    })
})

describe('GET /subtract, ', () => {
    it('should subtract two numbers', async () => {
        const res = await request(app).get('/calculator/subtract?num1=83&num2=30')
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('result', 53)
    })
})

describe('GET /multiply, ', () => {
    it('should multiply two numbers', async () => {
        const res = await request(app).get('/calculator/multiply?num1=83&num2=30')
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('result', 2490)
    })
})

describe('GET /divide, ', () => {
    it('should divide two numbers', async () => {
        const res = await request(app).get('/calculator/divide?num1=90&num2=30')
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('result', 3)
    })
})