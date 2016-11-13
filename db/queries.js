const knex = require('./knex.js')

function Shows() {
  return knex('shows')
}

function getAll() {
  return Shows().select()
}

function getSingle(showId) {
  return Shows().where('id', parseInt(showId)).first()
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
}
