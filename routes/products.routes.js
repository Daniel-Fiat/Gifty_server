const router = require('express').Router();
const ProductModel = require('../models/Product.model')
const { createProduct } = require('../controller/product.controller');

/* --------------GET------------- */
//router.get("/", getAll);

/* ---------------PUT -----------*/
router.put('/new', createProduct)


module.exports = router;
