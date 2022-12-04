const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Types = mongoose.Schema.Types
const model = mongoose.model

const reviewSchema = new Schema(
    {
        product_id: {
            type: String,//ObjectID
            required: true,
            trim: true
        },
        userId: {
            type: String,//ObjectID
            required: true,
            trim: true
        },
        comment: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
        },

    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;