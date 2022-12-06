const ProductModel = require('../models/Product.model');
const UserModel = require('../models/User.model');
const mongoose = require("mongoose");
const { isValidObjectId } = require('mongoose');
const MESSAGE_ERROR_ID = 'Error: InvalidID';

const createProduct = (req, res, next) => {
    const { name, imgUrl, description, price, sellerUser } = req.body
    console.log(sellerUser)
    UserModel.findById(sellerUser).then(user => {
        console.log(user._id)
        if (user) {
            ProductModel.create({ name, imgUrl, description, price, sellerUser: user._id })
                .then(res.sendStatus(201))
                .catch(next)
        } else {

            res.sendStatus(401)
        }
    })

}

const updateProduct = (req, res, next) => {
    const { name, imgUrl, description, price } = req.body
    const { idProduct } = req.params
    console.log(idProduct, name, imgUrl, description, price)
    ProductModel.findByIdAndUpdate(idProduct, { name, imgUrl, description, price }, { new: true })
        .then(product => res.status(200).json(product))
        .catch(next)
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
const getAll = (req, res, next) => {
    try {
        ProductModel.find()
            .then((products => res.status(200).json(products)))
            .catch(next)
    } catch (err) {
        res.status(400).json({ errorMessage: "err.message" })
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
    ProductModel.find({ sellerUser: idUser })
        .then(catalog => {
            console.log({ $match: { sellerUser: idUser } })
            res.status(200).json(catalog)
        })
}

module.exports = { createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct }