"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SurveySchema = _mongoose["default"].Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  question1: {
    type: String,
    required: true,
    trim: true
  },
  question2: {
    type: String,
    required: true,
    trim: true
  },
  question3: {
    type: String,
    required: true,
    trim: true
  },
  question4: {
    type: String,
    trim: true
  }
});

module.exports = _mongoose["default"].model('Survey', SurveySchema);