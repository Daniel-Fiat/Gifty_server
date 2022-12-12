const router = require('express').Router()
const { payment } = require('../controller/payment.Controller')


/* --------------GET------------- */

router.get('/', payment)
module.exports = router