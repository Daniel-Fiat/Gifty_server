const { Schema, model, Types } = require("mongoose");

const reviewSchema = new Schema(
    {
        product_id: {
            type: Types.ObjectId,
            ref: "Product"
        },
        userId: {
            type: Types.ObjectId,
            ref: "User"
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
        timestamps: true
    }
);

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;