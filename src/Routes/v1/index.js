const express = require("express");
const UserController = require("../../Controllers/UserController");
const { AuthReqValidate } = require("../../Middlewares/index");

const router = express.Router();

router.post('/signup', AuthReqValidate.authReqValidate, UserController.create);
router.get('/user', UserController.getById);
router.post('/signin', AuthReqValidate.authReqValidate, UserController.signIn);
router.get('/isAuthenticated', UserController.isAuthenticated);

module.exports = router;