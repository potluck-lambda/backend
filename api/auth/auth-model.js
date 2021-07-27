const db = require('../data/db-config')

async function addUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject
}

function findByUsername(username) {
  return db('users')
    .select('user_id', 'username', 'password')
    .where('username', username).first()
}

module.exports = {
  addUser,
  findByUsername,
}