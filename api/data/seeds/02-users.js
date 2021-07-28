
exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'ben',
      password: '$2a$08$sXN5GzS3CeUzwAp9qE/CoeSrnkXaGcXbV7SjfmAcYfGi4wWypf2Yy'
    },
    {
      username: 'marcie',
      password: '$2a$08$sXN5GzS3CeUzwAp9qE/CoeSrnkXaGcXbV7SjfmAcYfGi4wWypf2Yy'
    },
    {
      username: 'jacob',
      password: '$2a$08$sXN5GzS3CeUzwAp9qE/CoeSrnkXaGcXbV7SjfmAcYfGi4wWypf2Yy'
    },
    {
      username: 'damian',
      password: '$2a$08$sXN5GzS3CeUzwAp9qE/CoeSrnkXaGcXbV7SjfmAcYfGi4wWypf2Yy'
    },
  ])
}