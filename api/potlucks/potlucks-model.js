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

function getById(potluck_id) {
  return db('potlucks')
  .select(
    "organizer_id",
    "date",
    "time",
    "street_number",
    "street_name",
    "state",
    "zip_code"
  )
  .where('potluck_id', potluck_id).first()
}

async function deletePL(potluck_id) {
  const toBeDeleted = await getById(potluck_id)
  await db('potlucks').where("potluck_id", potluck_id).del()
  return toBeDeleted
}

module.exports = {
  getAll,
  addPotluck,
  getById,
  deletePL,
}
