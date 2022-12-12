const router = require('express').Router();
const ReviewModel = require('../models/Review.model')
const { createReview, getByProduct } = require('../controller/review.controller');

/* --------------GET------------- */
router.get('/productreview')
router.get('/review/:id', getByProduct)


/* ---------------PUT -----------*/
router.post('/new', createReview)



module.exports = router;