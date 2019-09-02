const express = require('express')

const app = express();

app.get('', (req, res) => {
    res.send('<h1>hello express</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'david',
        hi: 'hi'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({forcast: 'it is snowing',
        location: 'new jersey'})
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})