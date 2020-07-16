"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("dotenv/config");

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _users = require("./controllers/users");

var _users2 = _interopRequireDefault(require("./routes/users"));

var _surveys = _interopRequireDefault(require("./routes/surveys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])(); // app.disable('x-powered-by')

_mongoose["default"].connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
}); // Middleware


app.use((0, _cors["default"])());
app.use((0, _express.json)());
app.post("/signup", _users.signup);
app.post("/login", _users.login);
app.use("/api/user", _users2["default"]);
app.use("/api/surveys", _surveys["default"]); // Handle production

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(_express["default"]["static"](__dirname + "/public/")); // Handle SPA

  app.get(/.*/, function (req, res) {
    return res.sendFile(__dirname + "/public/index.html");
  });
}

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});