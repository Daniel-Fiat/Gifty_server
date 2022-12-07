const router = require('express').Router();
const ProductModel = require('../models/Product.model')
const { createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct, getWishList, getCategory, getChanse } = require('../controller/product.controller');

/* --------------GET------------- */
router.get("/", getAll);
router.get('/category/:category', getCategory)
router.get('/chance/:chance', getChanse)
router.get('/catalog/:idUser', getCatalog)
router.get('/wishList/:idUser', getWishList)
router.get('/:id', getOne)

/* ---------------PUT -----------*/
router.put('/new', createProduct)
router.put('/edit/:idProduct', updateProduct)

/* ---------------delete -----------*/
router.delete('/delete/:id', deleteOne)

module.exports = router;
