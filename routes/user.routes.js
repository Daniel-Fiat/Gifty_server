const router = require('express').Router();
const UserModel = require('../models/User.model');
const {createUser}=require('../controller/user.controller');

/* --------------GET------------- */

/* ---------------PUT -----------*/
router.put("/new", createUser);

module.exports = router;