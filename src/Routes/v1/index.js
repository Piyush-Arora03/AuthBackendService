const  express  = require("express");
const  UserController  = require("../../Controllers/UserController");

const router = express.Router();

router.post('/signup', UserController.create);

module.exports = router;