"use strict";

var express = require("express");

var router = express.Router();

var SurveyController = require("../controllers/surveys"); // const authenticate = require("../middleware/auth")


router.route('/').get(SurveyController.getMany).post(SurveyController.createOne);
module.exports = router;