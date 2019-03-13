const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sourceSchema = require('./source');
const chronologySchema = require('./chronology');

const personSchema = new Schema({
  name: String,
  pseudonyms: [ String ],
  birthDate: Date,
  deathDate: Date,
  professions: [ chronologySchema ],
  titles: [ chronologySchema ],
  description: String,
  sources: [ sourceSchema ],
  images: [ String ]
});

module.exports = personSchema;
