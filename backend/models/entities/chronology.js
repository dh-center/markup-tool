var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chronologySchema = new Schema({
  stageName: String,
  stageDate: Date
});

module.exports = chronologySchema;
