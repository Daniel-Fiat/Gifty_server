const expres = require("express")
const { payment } = require('../controller/stripe.Controller')

const router = expres.Router()

router.post('/checkout', payment)


module.exports = router
