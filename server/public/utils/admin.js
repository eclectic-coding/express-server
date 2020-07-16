"use strict";

module.exports = function (req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).send({
      message: "Only admin users can take this action."
    });
  }
};