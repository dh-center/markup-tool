const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
  title: String,
  description: String
});

module.exports = sourceSchema;
