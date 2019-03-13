const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chronologySchema = new Schema({
  stageName: String,
  stageDate: Date
});

module.exports = chronologySchema;
