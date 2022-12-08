const router = require('express').Router();
const { createOrder } = require('../controller/order.Controller');


/* --------------GET------------- */
router.post('/new', createOrder);
router.get('/')

/* ---------------PUT -----------*/


/* ---------------Delete -----------*/

module.exports = router;