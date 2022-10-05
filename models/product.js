// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const productSchema = new Schema({
    name: { type: String, required: true }, 
    price: { type: String, required: true }, 
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }

    // InStock: Boolean
})

// create a Model from our Schema
const Product = mongoose.model('Product', productSchema)

// export our Model
module.exports = Product;