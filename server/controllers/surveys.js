const Survey = require('../models/survey');

// CRUD - Create
exports.createOne = async (req, res) => {
  const survey = new Survey(req.body);
  try {
    const doc = await survey.save();
    res.send(doc);
  } catch (e) {
    res.status(400).send();
  }
};

// CRUD - Read
exports.getMany = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.send(surveys);
  } catch (e) {
    res.status(400).send();
  }
};

// CRUD - Update
exports.updateOne = (req, res) => {
  res.send({ message: 'Update one survey' });
};

// CRUD - Delete
exports.removeOne = (req, res) => {
  res.send({ message: 'Remove one survey' });
};






