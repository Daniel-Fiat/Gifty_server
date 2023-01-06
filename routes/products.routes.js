const router = require('express').Router();
const { uploadImage, createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct, getWishList, getCategory, getChanse, getTopSix } = require('../controller/product.controller');
const fileUploader = require("../config/cloudinary.config");

/* --------------GET------------- */
router.get('/TopSix', getTopSix)
router.get('/category/:category', getCategory)
router.get('/chance/:chance', getChanse)
router.get('/catalog/:idUser', getCatalog)
router.get('/wishList/:idUser', getWishList)
router.get('/:id', getOne)

/* ---------------POST-----------*/
router.post("/", getAll);
router.post("/uploadImage", fileUploader.single("imageUrl"), uploadImage)
/* ---------------PUT-----------*/
router.put('/new', fileUploader.single("imageUrl"), createProduct)
router.put('/edit/:idProduct', updateProduct)

/* ---------------DELETE -----------*/
router.delete('/delete/:id', deleteOne)

module.exports = router;
