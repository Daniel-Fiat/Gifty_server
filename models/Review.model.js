const { Schema, model, Types } = require("mongoose");

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