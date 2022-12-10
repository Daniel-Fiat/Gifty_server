const router = require('express').Router();
const { createOrder, getByseller, getByClient, updateState } = require('../controller/order.Controller');


/* --------------GET------------- */
router.get('/seller/:id', getByseller)
router.get('/client/:id', getByClient)

/* ---------------POST -----------*/
router.post('/new', createOrder);

/* ---------------PUT -----------*/
router.put('/update/:idOrder', updateState)

/* ---------------Delete -----------*/

module.exports = router;