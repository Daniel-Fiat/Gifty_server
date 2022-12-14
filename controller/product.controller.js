const ProductModel = require('../models/Product.model');
const UserModel = require('../models/User.model');
const mongoose = require("mongoose");
const { isValidObjectId } = require('mongoose');
const MESSAGE_ERROR_ID = 'Error: InvalidID';

const uploadImage = (req, res, next) => {

    if (!req.file) {
        next(new Error("No file uploaded!"));
        return;
    }
    res.json({ fileUrl: req.file.path });
}

const createProduct = (req, res, next) => {
    const { name, imgUrl, description, price, sellerUser, category, chance, rangeAge } = req.body
    UserModel.findById(sellerUser).then(user => {
        if (user) {
            ProductModel.create({ name, imgUrl, description, price, sellerUser: user._id, category, chance, rangeAge })
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
    const { find, limit, offset, sort } = req.body
    const skip = limit * offset
    console.log(find)
    try {
        ProductModel.find(find)
            .limit(limit)
            .skip(skip)
            .sort(sort)
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
const getCategory = (req, res, next) => {
    const { category } = req.params
    const { offset = 0, limit = 15 } = req.body
    console.log(category)
    ProductModel
        .find({ category: category })
        .limit(limit)
        .skip(limit * offset)
        .sort({ rating: -1 })
        .then(products => {
            res.status(200).json(products)
        })
}
const getChanse = (req, res, next) => {
    const { chance } = req.params
    const { offset = 0, limit = 15 } = req.body
    console.log(chance)
    ProductModel
        .find({ chance: chance })
        .limit(limit)
        .skip(limit * offset)
        .sort({ rating: -1 })
        .then(products => {
            res.status(200).json(products)
        })
}
const getTopTen = (req, res, next) => {
    ProductModel
        .find()
        .limit(6)
        .sort({ rating: -1 })
        .then(products => res.status(200).json(products))
}

module.exports = { uploadImage, createProduct, getOne, deleteOne, getCatalog, getAll, updateProduct, getWishList, getCategory, getChanse, getTopTen }