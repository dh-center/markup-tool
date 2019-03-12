var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sourseSchema = new Schema({
  title: String,
  description: String
});

module.exports = sourseSchema;
