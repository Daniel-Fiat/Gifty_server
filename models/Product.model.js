const { Schema, model,Types } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const productSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        imgUrl: {
            type: String,
            trim: true,
            //default 
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
        },
        sellerUser:{ 
            type: String,
            required: true,
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const ProductModel = model("Product", productSchema);

module.exports = ProductModel