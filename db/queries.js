const knex = require('./knex.js')

function Shows() {
  return knex('shows')
}

function getAll() {
  return Shows().select()
}

module.exports = {
  getAll: getAll
}
