const db = require('../data/db-config')

function getAll() {
  return db('potlucks')
}

async function addPotluck(potluck) {
  const [newPotluck] = await db('potlucks').insert(potluck, 
    ["organizer_id",
    "date",
    "time",
    "street_number",
    "street_name",
    "state",
    "zip_code"
    ])
  return newPotluck
}

module.exports = {
  getAll,
  addPotluck,
}
