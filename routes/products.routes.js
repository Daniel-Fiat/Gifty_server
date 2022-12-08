const router = require('express').Router();
const { createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct, getWishList, getCategory, getChanse, getTopTen } = require('../controller/product.controller');

/* --------------GET------------- */
router.get("/", getAll);
router.get('/TopTen', getTopTen)
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
