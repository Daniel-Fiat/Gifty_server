const router = require('express').Router();
const { createUser, getOne, editOne, addWishList, removeOneWishList, login } = require('../controller/user.controller');

/* --------------GET------------- */
router.get('/:id', getOne)


/* ---------------POST -----------*/
router.post("/new", createUser);
router.post('/login', login)

/* ---------------PUT -----------*/
router.put("/edit/:id", editOne);
router.put("/wishList/add/:id", addWishList);

/* ---------------Delete -----------*/
router.delete("/wishList/remove/:id", removeOneWishList);

module.exports = router;