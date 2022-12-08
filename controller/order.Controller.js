const OrderModel = require('../models/Order.Model')
const mongoose = require("mongoose");


const createOrder = (req, res, next) => {
    const { price, sellerUser, clientUser, productID, deliveryAddress } = req.body
    console.log(price, sellerUser, clientUser, productID, deliveryAddress)
    if (price) {
        OrderModel.create({ price, sellerUser, clientUser, productID, deliveryAddress })
            .then(res.sendStatus(201))
            .catch(next)
    } else {

        res.sendStatus(400)
    }
}

module.exports = { createOrder }