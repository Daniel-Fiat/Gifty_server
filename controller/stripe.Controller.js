
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY)

const payment = async (req, res) => {
    const session = await stripe.checkout.sessions.create(req.body)
    res.send({ url: session.url })
}

module.exports = { payment }