const mongoose = require("mongoose");

const SurveySchema = mongoose.Schema({
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

module.exports = mongoose.model("Survey", SurveySchema);
