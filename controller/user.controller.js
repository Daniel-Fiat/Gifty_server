const UserModel = require('../models/User.model');
const { isValidObjectId } = require('mongoose');
const bcrypt = require('bcryptjs');
const { signJwt } = require('../utils/jwt.util');
const SALT = 10;

const MESSAGE_ERROR_EMAIL = 'Email ya está en uso.';

const getUserToken = (req, res, next) => {
  UserModel.findById(req.user._id).then((user) => {
    res.json(user)
  })
}

const createUser = (req, res, next) => {
  const { email, password } = req.body
  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Error(MESSAGE_ERROR_EMAIL);
      }
      const saltBcrypt = bcrypt.genSaltSync(SALT);
      const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);
      return UserModel.create({ email, password: hashBcrypt });
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
///Token
const login = (req, res, next) => {
  const { email, password } = req.body

  UserModel.findOne({ email }).then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ token: signJwt(user._id.toString(), user.email) })
    }
    else {
      res.status(401).json({ errorMessage: "Usuario o contraseña incorrectos" })
    }
  }).catch(res.status(400))
}

const getOne = (req, res, next) => {
  try {
    const { id } = req.params
    if (!isValidObjectId(id)) {
      throw new Error("Error:invalidID")
    }
    UserModel.findById(id)
      .then(user => res.status(200).json(user))
      .catch(next)
  } catch (err) {
    res.status(400).json({ errorMessage: err.message })
  }
}

const editOne = (req, res, next) => {
  const { id } = req.params
  const { email, password, location } = req.body
  const saltBcrypt = bcrypt.genSaltSync(SALT);
  const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);
  UserModel.findByIdAndUpdate(id, { email, password: hashBcrypt, location }, { new: true })
    .then(user => res.status(200).json(user))
    .catch(next)
}

const addWishList = (req, res, next) => {
  const { id } = req.params
  const { idProduct } = req.body
  UserModel.findById(id).then(user => {
    if (!user.wishList.includes(idProduct)) {
      UserModel.findByIdAndUpdate(id, { $push: { wishList: idProduct } }, { new: true })
        .then(user => res.status(200).json(user.wishList))
        .catch(res.status(400))
    } else {
      res.status(400).json({ errorMessage: "the product already exists in the wish list" })
    }
  })
}
const removeOneWishList = (req, res, next) => {
  const { id } = req.params
  const { idProduct } = req.body
  UserModel.findById(id).then(user => {
    if (user.wishList.includes(idProduct)) {
      UserModel.findByIdAndUpdate(id, { $pull: { wishList: idProduct } }, { new: true })
        .then(user => res.status(200).json(user.wishList))
        .catch(res.status(400))
    } else {
      res.status(400).json({ errorMessage: "the product dont exists in the wish list" })
    }
  })
}



module.exports = { getUserToken, createUser, getOne, editOne, addWishList, removeOneWishList, login }