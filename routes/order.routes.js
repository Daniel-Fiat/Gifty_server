const router = require('express').Router();
const { createOrder, getBySeller, getByClient, updateState } = require('../controller/order.Controller');


/* --------------GET------------- */
router.get('/seller/:id', getBySeller)
router.get('/client/:id', getByClient)

/* ---------------POST -----------*/
router.post('/new', createOrder);

/* ---------------PUT -----------*/
router.put('/update/:idOrder', updateState)

/* ---------------DELETE -----------*/

module.exports = router;