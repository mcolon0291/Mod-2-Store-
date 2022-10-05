//Load express//
const express = require('express')

//create a special route object
const router = express.Router()

 //model of log
const Product = require('../models/product')

//seed data
const seed = require('../models/seed')

//bring in all controllers//
const {findAllProducts, buyProduct, showNewView, deleteOneProduct, updateOneProduct, createNewProduct, showEditView, seedStarterData, clearProductData, showOneProduct,} = require('../controllers/productController')
    

//INDUCES//
//Index Route//
router.get('/', findAllProducts)

//setup new route//
router.get('/new',showNewView)

// //setup delete route//
router.delete('/:id', deleteOneProduct)


// //update route//
router.put('/:id', updateOneProduct)

// // Setup "create" route
router.post('/', createNewProduct)

// // Setup "edit" route
router.get('/:id/edit', showEditView)


//patch
router.patch('/:id', buyProduct)

// Setup "seed" route
router.get('/seed', seedStarterData)

// // CLEAR
router.get('/clear', clearProductData)

// // Setup "show" route  
 router.get('/:id', showOneProduct)


module.exports = router