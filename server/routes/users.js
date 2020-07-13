const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
const authenticate = require("../utils/auth")


router
  .route("/")
  .post(UsersController.create)
  .all(authenticate)
  .get(UsersController.read)

router
  .route("/login")
  .post(UsersController.login)

// Add ME - aka Profile

module.exports = router;
