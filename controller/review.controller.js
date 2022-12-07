const ProductModel = require('../models/Product.model');
const ReviewModel = require('../models/Review.model');

const createReview = (req, res, next) => {
    const { product_id, userId, comment, rating } = req.body
    ReviewModel.find({ product_id: product_id }).then(reviews => {
        let cont = 0
        reviews.forEach(element => { cont += element.rating })
        const media = Math.floor(cont / reviews.length)
        ProductModel.findByIdAndUpdate(product_id, { rating: media }).then()
    })
    ReviewModel.create({ product_id, userId, comment, rating })
        .then(res.sendStatus(201))
        .catch(res.sendStatus(400))
}

module.exports = { createReview, getRatingProduct }