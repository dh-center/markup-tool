const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  pseudonyms: [ String ],
  birthDate: Date,
  deathDate: Date,
  professions: [ String ],
  titles: [ String ],
  description: String,
  sources: [ {
    type: {
      title: String,
      description: String
    },
    required: false
  } ],
  images: [ String ]
});

module.exports = mongoose.model('persons', personSchema);
