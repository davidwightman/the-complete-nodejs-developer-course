require('dotenv').config()
const request = require('request');

const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/37.8267,-122.4233?units=us`

const geoCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}&limit=1`

request({url: geoCode, json: true}, (error, response) => {
    //console.log(response.features)
    console.log(response.body.features[0].place_name)
    console.log(response.body.features[0].center[0]) // longitude
    console.log(response.body.features[0].center[1]) // latitude
})
// features[0].place_name
// longitude features[0].center[0]
// latitude features[0].center[1]

// request({url: url, json: true}, (error, response)=>{
//   // console.log(response.body.currently)
//   console.log(response.body.daily.data[0].summary)
//   console.log(`it is currently ${response.body.currently.temperature} there is ${response.body.currently.precipProbability}% chance of rain`)
// });