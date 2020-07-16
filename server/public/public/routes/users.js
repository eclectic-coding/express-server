"use strict";

var express = require("express");

var router = express.Router();

var UsersController = require("../controllers/users");

var authenticate = require("../utils/auth");

router.get(UsersController.read);
router.route("/logout")["delete"](UsersController.logout);
router.route("/dashboard").all(authenticate).get(UsersController.read);
module.exports = router;