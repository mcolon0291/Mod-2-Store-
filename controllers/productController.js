const Product = require('../models/product')
const seed = require('../models/seed')


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

//DELETE//
const deleteOneProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        }else{
            res.status(200).redirect('/products')
        }
    })
}

//UPDATE// 
const updateOneProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, foundProduct) => {
        console.log(req.body)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`)
        }
    })
}


//CREATE//
const createNewProduct = (req, res) => {
    if(req.body.qty <= 0){
        req.body.inStock = "off"
    } else {
        req.body.inStock = "on"
    }

    if (req.body.inStock === "on") {
        req.body.inStock = true
    } else {
        req.body.inStock = false
    }
   
    Product.create(req.body, (err, createdProduct) => {
        console.log(req.body)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}


// ROUTE EDIT//
const showEditView = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Edit', { products: foundProduct })
        }
    })
}

// ROUTE SEED///
const seedStarterData = (req, res) => {
    
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.products)
          
            Product.create(seed.products, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/products')
                }
            })
        }
    })
}

//ROUTE CLEAR///
const clearProductData = (req, res) => {
    Product.deleteMany({}, (err, deletedProducts) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products/')
        }
    })
}


// ROUTE SHOW PAGE///
const showOneProduct = (req, res) => {

    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('products/Show', { products: foundProduct })
        }
    })
}


const buyProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $inc: { qty: -1 } }, (err, updatedProduct) => {
        if (err) {
            res.status(400).json(err)
         } else {
            res.status(200).render('products/Show', { products: updatedProduct })           
        
        }

        })
}




module.exports = {findAllProducts,buyProduct, showNewView, deleteOneProduct, updateOneProduct, createNewProduct, showEditView, seedStarterData, clearProductData, showOneProduct}