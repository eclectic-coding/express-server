const User = require('../models/user');

exports.list = (req, res) => {
  res.send({ message: 'It works!' });
};

exports.create = async (req, res) => {

  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.send({ user: doc });
  } catch (e) {
    res.status(400);
  }
};

