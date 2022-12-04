const router = require('express').Router();
const UserModel = require('../models/User.model');
const { createUser, getOne }=require('../controller/user.controller');

/* --------------GET------------- */
router.get('/:id', getOne)
/* ---------------PUT -----------*/
router.put("/new", createUser);

module.exports = router;