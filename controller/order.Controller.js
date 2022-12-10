const OrderModel = require('../models/Order.Model')
const mongoose = require("mongoose");


const createOrder = (req, res, next) => {
    const { price, sellerUser, clientUser, productID, dedication, deliveryAddress, deliverDate, State } = req.body
    if (price) {
        OrderModel.create({ price, sellerUser, clientUser, productID, dedication, deliveryAddress, deliverDate, State })
            .then(res.sendStatus(201))
            .catch(next)
    } else {
        res.sendStatus(400)
    }
}
const getByseller = (req, res, next) => {
    const { id } = req.params
    OrderModel.find({ sellerUser: id })
        .then(order => res.status(201).json(order))
}
const getByClient = (req, res, next) => {
    const { id } = req.params
    OrderModel.find({ clientUser: id })
        .then(order => res.status(201).json(order))
        .catch(next)
}
const updateState = (req, res, next) => {
    const { state } = req.body
    const { idOrder } = req.params
    console.log(idOrder, state)
    OrderModel.findByIdAndUpdate(idOrder, { idOrder: state }, { new: true })
        .then(order => res.status(200).json(order))
}

module.exports = { createOrder, getByseller, getByClient, updateState }