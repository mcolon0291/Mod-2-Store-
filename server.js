//Load express//
const express = require('express')
const methodOverride = require('method-override')

//Bring in mongoConfig//
const mongoConfig = require('./config')

const productRoutes = require('./routes/productRoutes')

require('dotenv').config()


//Creates our Express app/
const app = express ()


// Identify our port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use('/products', productRoutes)

// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()