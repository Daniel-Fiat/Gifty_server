const router = require('express').Router();
const ReviewModel = require('../models/Review.model')
const { createReview } = require('../controller/review.controller');

/* --------------GET------------- */
//router.get("/", getAll);

/* ---------------PUT -----------*/
router.put('/new', createReview)


module.exports = router;