const { Schema, model, Types } = require("mongoose");

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
        rating: {
            type: Number,
            default: 0,
        },
        sellerUser: {
            type: Types.ObjectId,
            ref: "User"
        },
        category: [{ type: String, default: [], enum: ["breakfast", 'cakes', 'tapas', 'flowers', 'drinks', 'objects'] }],
        chance: [{ type: String, default: [], enum: ["birthday", 'anniversary', 'valentine', 'weddings', 'babyshower', 'graduation'] }],
        rangeAge: [{ type: String, default: [], enum: ["babyboomers", 'generaciónX', 'millennials', 'generaciónZ', 'Alpha'] }],

    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const ProductModel = model("Product", productSchema);

module.exports = ProductModel