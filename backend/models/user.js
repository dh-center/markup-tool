const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: 'Email is required'
  },
  hashedPassword: {
    type: String,
    required: 'Password is required'
  }
});

userSchema.statics.create = async function (email, password, cb) {
  /**
   * @const {Number} - cost factor: the higher the number, the more difficult is brute-forcing.
   */
  const saltRounds = 12;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new this({email, hashedPassword});

  return user.save(cb);
};

userSchema.methods.generateJWT = function () {
  return jwt.sign({
    id: this._id,
  }, process.env.JWT_SECRET_STRING, {expiresIn: '15min'});
};

module.exports = mongoose.model('users', userSchema);
