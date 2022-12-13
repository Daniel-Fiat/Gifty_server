const expres = require("express")
const Stripe = require("stripe");
const { route } = require("./review.routes");
const { payment } = require('../controller/stripe.Controller')



const router = expres.Router()

router.post('/checkout', payment)
module.exports = router
