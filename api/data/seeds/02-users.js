
exports.seed = async function (knex) {
  return knex('users').insert([
    {
      username: 'ben',
      password: 'password'
    },
    {
      username: 'marcie',
      password: 'password'
    },
    {
      username: 'jacob',
      password: 'password'
    },
    {
      username: 'damian',
      password: 'password'
    },
  ])
}