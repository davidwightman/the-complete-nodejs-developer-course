require('dotenv').config()
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const inputFromUser = process.argv[2]

if (!inputFromUser) {
    console.log('Try again but include a city')
} else {
    geocode(inputFromUser, (error, { longitude, latitude, location }) => {
        if (error) {
            return console.log(error)
        }
        forcast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
    
        })
    })
}
