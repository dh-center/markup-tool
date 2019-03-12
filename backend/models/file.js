var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
  filename: String,
  path: String
});
