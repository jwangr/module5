import express from 'express';
const app = express(); // creates an express application
const port = 3000;


app.get('/blog/create', (req, res) => {
    res.send('Create a new blog post')
})

app.get('/blog', (req, res) => {
    res.send('Opening blog posts!')
})

app.get('/about', (req, res) => {
    res.send('About us!')
})


app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})