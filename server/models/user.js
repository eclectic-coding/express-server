import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema(
  {
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
        validator: validator.isEmail,
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
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    toJSON: {
      transform: (doc, { _id, name, email, role }) => ({
        id: _id,
        name,
        email,
        role
      })
    }
  }
);

UserSchema.methods.generateAuthToken = async function() {
  if (this.token) {
    return this.token;
  }
  const token = jwt
    .sign({ _id: this._id.toHexString() }, process.env.JWT_SECRET)
    .toString();
  this.token = token;
  await this.save();
  return token;
};

UserSchema.statics.findByToken = async function(token) {
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    return this.findOne({ _id, token });
  } catch (err) {
    throw err;
  }
};

UserSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    try {
      this.password = await bcrypt.hash(this.password, 8);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

UserSchema.statics.findByCredentials = async function(email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw {
      errors: {
        email: {
          message: "User not found."
        }
      }
    };
  } else {
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw {
        errors: {
          password: {
            message: "Incorrect password."
          }
        }
      };
    }
  }
};

UserSchema.pre("save", async function(next) {
  if (this.isModified("role") && this.role === "admin") {
    const users = await this.constructor.find({ role: "admin" });
    if (users.length >= 1) {
      next(new Error("Only one admin user can be added."));
    } else {
      next();
    }
  } else {
    next();
  }
});

// eslint-disable-next-line no-unused-vars
UserSchema.methods.removeToken = function(token) {
  const user = this;
  user.token = null;
  return user.save();
};

module.exports = mongoose.model("User", UserSchema);
