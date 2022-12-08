module.exports = (app) => {
    app.use("/user", require('./user.routes'));
    app.use("/products", require('./products.routes'));
    app.use("/review", require('./review.routes'));
    app.use("/orders", require('./order.routes'));
}