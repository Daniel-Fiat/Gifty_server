const router = require('express').Router();
const ReviewModel = require('../models/Review.model')
const { createReview, getRatingProduct } = require('../controller/review.controller');

/* --------------GET------------- */
router.get('/getRating', getRatingProduct)


/* ---------------PUT -----------*/
router.put('/new', createReview)



module.exports = router;