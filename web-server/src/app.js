const path = require('path')
const express = require('express')

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', { title: 'Weather APP', 
name: 'me'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me', 
name: 'David'})
})

app.get('/help', (req, res) => {
    res.render('help', { message: 'Example Message'})
})

app.get('/weather', (req, res) => {
    res.send({forcast: 'it is snowing',
        location: 'new jersey'})
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})