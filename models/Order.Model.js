const { Schema, model, Types } = require("mongoose");

const orderSchema = new Schema(
    {
        price: {
            type: Number,
        },
        sellerUser: {
            type: Types.ObjectId,
            ref: "User"
        },
        clientUser: {
            type: Types.ObjectId,
            ref: "User"
        },
        productID: {
            type: Types.ObjectId,
            ref: "Product"
        },
        dedication: String,
        deliverDate: String,
        State: {
            type: String,
            enum: ["pendingPayment", "pendingConfirmation", "accepted", "delivered", "paidOut", "reject", "review"],
            default: "pendingPayment"
        },
        deliveryAddress: {
            street: { type: String },
            number: { type: String },
            door: { type: String },
            floor: { type: String },
            city: { type: String },
        },

    },

    {
        timestamps: true
    }
);

const OrderModel = model("Order", orderSchema);

module.exports = OrderModel