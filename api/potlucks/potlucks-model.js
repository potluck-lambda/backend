const db = require('../data/db-config')

function getAll() {
  return db('potlucks')
}

function addPotluck(potluck) {
  return db('potlucks').insert(potluck, [])
}

module.exports = {
  getAll,
  addPotluck,
}
