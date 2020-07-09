const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const authenticate = require("../middleware/auth")

router
  .route("/")
  .post(UserController.create)
  .all(authenticate)
  .get(UserController.read)


module.exports = router;
