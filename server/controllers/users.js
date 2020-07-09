const User = require('../models/user');

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    const doc = await user.save();
    const token = await doc.generateAuthToken();
    res
      .header("authorization", `Bearer ${token}`)
      .send(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.read = async (req, res) => res.send(req.user);

