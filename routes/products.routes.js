const router = require('express').Router();
const ProductModel = require('../models/Product.model')
const { createProduct, getOne, deleteOne, getCatalog, getAll } = require('../controller/product.controller');

/* --------------GET------------- */
router.get("/", getAll);
router.get('/catalog/:idUser', getCatalog)
router.get('/:id', getOne)

/* ---------------PUT -----------*/
router.put('/new', createProduct)

/* ---------------delete -----------*/
router.delete('/delete/:id', deleteOne)

module.exports = router;
