const ProductModel = require('../models/Product.model');
const UserModel = require('../models/User.model');
const mongoose = require("mongoose");
const { isValidObjectId } = require('mongoose');
const MESSAGE_ERROR_ID = 'Error: InvalidID';

const createProduct = (req, res, next) => {
    const { name, imgUrl, description, price, sellerUser, category, chance } = req.body
    UserModel.findById(sellerUser).then(user => {
        if (user) {
            ProductModel.create({ name, imgUrl, description, price, sellerUser: user._id, category, chance })
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
            .populate({ path: "sellerUser", select: "email" })
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
            res.status(200).json(catalog)
        })
}
const getWishList = (req, res, next) => {
    const { idUser } = req.params
    UserModel.findById(idUser).then(user =>
        ProductModel.find({ _id: user.wishList })
            .then(wishList => {
                res.status(200).json(wishList)
            })

    )
}

module.exports = { createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct, getWishList }