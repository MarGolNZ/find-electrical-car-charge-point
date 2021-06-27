const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const server = express()
const request = require('superagent')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('/api/v1/charge-point', (req, res) => {
    request
        .get(`https://api.openchargemap.io/v3/poi/?output=json&countryid=161,18&includecomments=true&maxresults=100&compact=false&verbose=false/?key=${process.env.REACT_APP_API_KEY}`)
        .then(response => res.json(response.body))
        .catch(e => console.log(e))
})

module.exports = server


//CountryID: 161 (NZ)
//CountryID: 18 (AU)