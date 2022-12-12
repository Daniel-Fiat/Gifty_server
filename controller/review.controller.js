const ProductModel = require('../models/Product.model');
const ReviewModel = require('../models/Review.model');

const createReview = (req, res, next) => {
    const { product_id, userId, comment, rating } = req.body
    console.log(req.body)
    ReviewModel.find({ product_id: product_id }).then(reviews => {
        let cont = 0
        reviews.forEach(element => { cont += element.rating })
        const media = Math.floor(cont / reviews.length)
        console.log(media)
        ProductModel.findByIdAndUpdate(product_id, { rating: media }).then()
        ReviewModel.create({ product_id, userId, comment, rating }).then()
            .then(res.sendStatus(201))

    })
    //// revisar control 
}

module.exports = { createReview }