const ProductModel = require('../models/Product.model');
const mongoose = require("mongoose");


const createProduct = (req, res, next) => {
    const { name, imgUrl, description, price, sellerUser } = req.body

    ProductModel.create({ name, imgUrl, description, price, sellerUser })
        .then(res.sendStatus(201))
        .catch(res.sendStatus(400))
}
module.exports = { createProduct }