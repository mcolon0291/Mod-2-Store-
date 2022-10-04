const Product = require ('. ./models/products')

const seed = require('../models/seed')

//I.N.D.E.X//
const findAllProducts = (req, res) => {
    Product.find({},(err, foundProduct) => {
        if(err) {
            res.status(400).json(err)
        }else {
            res.status(200).render('products/Index', {products: foundProduct })
        }
    })
}

///NEW ROUTE///
const showNewView = (req, res) => {
    res.render('products/New')
}

//CREATE//
const createNewProduct = (req, res) => {
    Product.create(req, res) => {
        Product.create(req.body, (err, createdProduct) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).redirect('/products')
            }
        })
    }
    
}


//UPDATE// 
const updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`);
        }
    })
}

// ROUTE  GET /products/:id     (show page)
const showOneProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Show', { product: foundProduct })
        }
    })
}

const buyProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $inc: { qty: -1 } }, { new: true }, (err, updatedProduct) => {
        if (err) {
            res.status(400).json(err)
         } else {
            res.status(200).render('products/Show', { product: updatedProduct })           
        
        }

        })
}
// ROUTE       GET /products/seed      (seed page)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Product.create(seed, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}


//route clear
const clearData = (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else { 
            res.status(200).redirect('/products')
        }
    })
}

//DELETE//
const deleteOneProduct = (req, res) => {
    Product.findbyIdandDelete(req.params.id, (err, deleteProduct) => {
        ir (err) {
            res.status(400).json(err)
        }else{
            res.status(200).redirect('/products')
        }
    })
}

module.exports = {findAllProducts, deleteOneProduct, createNewProduct, updateOneProduct, showNewView, showOneProduct,buyProduct, seedStarterData,clearData}