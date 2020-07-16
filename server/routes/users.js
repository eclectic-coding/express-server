const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
const authenticate = require("../utils/auth");

router.get(UsersController.read);

router.route("/logout").delete(UsersController.logout);

router
  .route("/dashboard")
  .all(authenticate)
  .get(UsersController.read);

module.exports = router;
