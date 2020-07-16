"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var UserSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: _validator["default"].isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  },
  token: {
    type: String
  },
  role: {
    type: String,
    "enum": ["admin", "user"],
    "default": "user"
  }
}, {
  toJSON: {
    transform: function transform(doc, _ref) {
      var _id = _ref._id,
          name = _ref.name,
          email = _ref.email,
          role = _ref.role,
          token = _ref.token;
      return {
        id: _id,
        name: name,
        email: email,
        role: role,
        token: token
      };
    }
  }
});

UserSchema.methods.generateAuthToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var token;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.token) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", this.token);

        case 2:
          token = _jsonwebtoken["default"].sign({
            _id: this._id.toHexString()
          }, process.env.JWT_SECRET).toString();
          this.token = token;
          _context.next = 6;
          return this.save();

        case 6:
          return _context.abrupt("return", token);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

UserSchema.statics.findByToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    var _jwt$verify, _id;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _jwt$verify = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET), _id = _jwt$verify._id;
            return _context2.abrupt("return", this.findOne({
              _id: _id,
              token: token
            }));

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 5]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

UserSchema.pre("save", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(next) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!this.isModified("password")) {
              _context3.next = 13;
              break;
            }

            _context3.prev = 1;
            _context3.next = 4;
            return _bcryptjs["default"].hash(this.password, 8);

          case 4:
            this.password = _context3.sent;
            next();
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            next(_context3.t0);

          case 11:
            _context3.next = 14;
            break;

          case 13:
            next();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());

UserSchema.statics.findByCredentials = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(email, password) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return this.findOne({
              email: email
            });

          case 2:
            user = _context4.sent;

            if (user) {
              _context4.next = 7;
              break;
            }

            throw {
              errors: {
                email: {
                  message: "User not found."
                }
              }
            };

          case 7:
            _context4.next = 9;
            return _bcryptjs["default"].compare(password, user.password);

          case 9:
            if (!_context4.sent) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", user);

          case 13:
            throw {
              errors: {
                password: {
                  message: "Incorrect password."
                }
              }
            };

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

UserSchema.pre("save", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(next) {
    var users;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(this.isModified("role") && this.role === "admin")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 3;
            return this.constructor.find({
              role: "admin"
            });

          case 3:
            users = _context5.sent;

            if (users.length >= 1) {
              next(new Error("Only one admin user can be added."));
            } else {
              next();
            }

            _context5.next = 8;
            break;

          case 7:
            next();

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x5) {
    return _ref6.apply(this, arguments);
  };
}()); // eslint-disable-next-line no-unused-vars

UserSchema.methods.removeToken = function (token) {
  var user = this;
  user.token = null;
  return user.save();
};

module.exports = _mongoose["default"].model("User", UserSchema);