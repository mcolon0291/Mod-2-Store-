//Load express//
const express = require('express')
const methodOverride = require('method-override')

//Bring in mongoConfig//
const mongoConfig = require('./config')

const productRoutes = require('./routes/productRoutes')

require('dotenv').config()


//Creates our Express app/
const app = express ()



// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()