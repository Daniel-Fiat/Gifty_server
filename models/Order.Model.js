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
            ref: "User"
        },
        dedication: String,
        deliverDate: String,
        State: {
            type: String,
            enum: ["pendconfir", "confirmado", "entregado", "valuado"],
            default: "pendconfir"
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
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const OrderModel = model("Order", orderSchema);

module.exports = OrderModel