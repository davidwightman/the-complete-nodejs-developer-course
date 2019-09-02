const https = require('https');

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/40,-40.json?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}&limit=1`

https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data  = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(data)

    })
})

request.on('error', (error) => {
    console.log(`an error ${error}`)

})
request.end()