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

function add(show) {
  return Shows().insert(show, 'id')
}

function update(showId, updates) {
  return Shows().where('id', parseInt(showId)).update(updates)
}

function deleteItem(showId) {
  return Shows().where('id', parseInt(showId)).del()
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
}
