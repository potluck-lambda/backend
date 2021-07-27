const db = require('../data/db-config')

function getAll() {
  return db('potlucks')
}

module.exports = {
  getAll,
  
}
