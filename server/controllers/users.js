const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    const doc = await user.save();
    const token = await doc.generateAuthToken();
    res.header("authorization", `Bearer ${token}`).send(doc);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.header("authorization", `Bearer ${token}`).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.read = async (req, res) => {
  console.log(req.user);
  res.send({ user: req.user });
};

exports.logout = async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
};
