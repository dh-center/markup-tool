const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  name: String
});

/**
 * Creates new entity in DB and returns him
 * @param {String} name - name of entity
 * @param {Function} [cb] - callback (if not specified, Promises are used)
 * @returns {Promise} - created entity
 */
entitySchema.statics.create = async function (name, cb) {
  const entity = new this({ name });

  return entity.save(cb);
};

module.exports = mongoose.model('entities', entitySchema);
