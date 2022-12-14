const validateToken = require("../middleware/validateToken.middleware");
const router = require('express').Router();
const { getUserToken, createUser, getOne, editOne, addWishList, removeOneWishList, login } = require('../controller/user.controller');

/* --------------GET------------- */
router.get("/me", validateToken, getUserToken);
router.get('/:id', getOne)

/* ---------------POST -----------*/
router.post("/new", createUser);
router.post('/login', login)

/* ---------------PUT -----------*/
router.put("/edit/:id", validateToken, editOne);
router.put("/wishList/add/:id", addWishList);

/* ---------------DELETE -----------*/
router.put("/wishList/remove/:id", removeOneWishList);

module.exports = router;