const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
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

// userSchema.methods.setPassword = function (password) {
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };
//
// userSchema.methods.validPassword = function (password) {
//   var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   return this.hash === hash;
// };

// userSchema.methods.generateJWT = function() {
//    var today = new Date();
//    var exp = new Date(today);
//    exp.setDate(today.getDate() + 60);
//
//      return jwt.sign({
//        id: this._id,
//        username: this.username,
//        exp: parseInt(exp.getTime() / 1000),
//      }, secret);
//   };

module.exports = mongoose.model('users', userSchema);
