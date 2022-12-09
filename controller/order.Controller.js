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

module.exports = { createOrder }