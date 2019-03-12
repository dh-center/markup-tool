var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sourceSchema = require('./sourse');
var chronologySchema = require('./chronology');

var personSchema = new Schema({
  name: String,
  pseudinyms: [String],
  birthDate: Date,
  deathDate: Date,
  professions: [chronologySchema],
  titles: [chronologySchema],
  description: String,
  sourses: [sourceSchema],
  images: [String]
});

module.exports = personSchema;
