const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const SALT = 10;
const MESSAGE_ERROR_EMAIL = 'Email ya está en uso.';

const createUser = (req, res, next) => {
  const { username, email, password, location } = req.body

  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Error(MESSAGE_ERROR_EMAIL);
      }
      const saltBcrypt = bcrypt.genSaltSync(SALT);
      const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);
      return UserModel.create({ username, email, password: hashBcrypt, location });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      if (err.message === MESSAGE_ERROR_EMAIL) {
        res.status(400).json({ errorMessage: err.message });
      }
      next(err);
    });

}

module.exports = { createUser }