const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
// const authenticate = require("../utils/auth");

router.get(UsersController.read);

module.exports = router;
