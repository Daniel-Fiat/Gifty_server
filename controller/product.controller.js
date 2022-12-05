const ProductModel = require('../models/Product.model');
const mongoose = require("mongoose");
const { isValidObjectId } = require('mongoose');
const MESSAGE_ERROR_ID = 'Error: InvalidID';

const createProduct = (req, res, next) => {
    const { name, imgUrl, description, price, sellerUser } = req.body

    ProductModel.create({ name, imgUrl, description, price, sellerUser })
        .then(res.sendStatus(201))
        .catch(res.sendStatus(400))
}

const getOne = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new Error(MESSAGE_ERROR_ID)
        }
        ProductModel.findById(id)
            .then((product => res.status(200).json(product)))
            .catch(next)
    } catch (err) {
        res.status(400).json({ errorMessage: err.message })
    }
}

const deleteOne = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new Error(MESSAGE_ERROR_ID)
        }
        ProductModel.findById(id)
            .then(product =>
                ProductModel.findByIdAndDelete(id)
                    .then(res.status(200).json(product))
            )
    } catch (err) {
        res.status(400).json({ errorMessage: err.message })
    }
}
const getCatalog = (req, res, next) => {
    const { idUser } = req.params
    console.log(idUser)
    ProductModel.find({ sellerUser: idUser })
        .then(catalog => {
            console.log({ $match: { sellerUser: idUser } })
            res.status(200).json(catalog)
        })
}

module.exports = { createProduct, getOne, deleteOne, getCatalog }