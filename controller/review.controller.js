const ReviewModel = require('../models/Review.model');

const createReview = (req, res, next) => {
    const { product_id, userId, comment, rating } = req.body

    ReviewModel.create({ product_id, userId, comment, rating })
        .then(res.sendStatus(201))
        .catch(res.sendStatus(400))
}
module.exports = { createReview }