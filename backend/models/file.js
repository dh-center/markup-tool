const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  filename: String,
  path: String
});

module.exports = fileSchema;
