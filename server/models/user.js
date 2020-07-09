import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
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
      message: '{VALUE} is not a valid email'
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
    enum: ['admin', 'user'],
    default: 'user'
  }
}, {
  toJSON: {
    transform: (doc, { _id, name, email, role }) => ({ id: _id, name, email, role })
  }
});

UserSchema.methods.generateAuthToken = async function () {
  if (this.token) {
    return this.token;
  }
  const token = jwt.sign(
    { _id: this._id.toHexString() },
    process.env.JWT_SECRET
  ).toString();
  this.token = token;
  await this.save();
  return token;
};

UserSchema.statics.findByToken = async function (token) {
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    return this.findOne({ _id, token });
  } catch (err) {
    throw err;
  }
};

module.exports = mongoose.model('User', UserSchema);
