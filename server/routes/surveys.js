const express = require("express");
const router = express.Router();
const SurveyController = require("../controllers/surveys");
// const authenticate = require("../middleware/auth")

router
  .route('/')
  .get(SurveyController.getMany)
  .post(SurveyController.createOne)

module.exports = router;
