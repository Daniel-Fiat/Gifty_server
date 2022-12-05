const router = require('express').Router();
const UserModel = require('../models/User.model');
const { createUser, getOne, editOne, addWishList, removeOneWishList } = require('../controller/user.controller');

/* --------------GET------------- */
router.get('/:id', getOne)

/* ---------------PUT -----------*/
router.put("/new", createUser);
router.put("/edit/:id", editOne);
router.put("/wishList/add/:id", addWishList);

/* ---------------Delete -----------*/
router.delete("/wishList/remove/:id", removeOneWishList);

module.exports = router;