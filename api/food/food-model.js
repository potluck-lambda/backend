const db = require('../data/db-config')

const getById = (id) => {
  return db('foods').where('food_id', id).first()
}

const findByName = async (food_name) => {
  const value = await db('foods').select("food_name").where('food_name', food_name).first()
  return value
}

async function addFood(food) {
  const [newFood] = await db('foods').insert(food, ['food_id', 'food_name'])
  return newFood
  // returns 
}

//model functions for potluck_food table

// const addFoodToPotluck = async (food_id, potluck_id) => {
const addFoodToPotluck = async ({ food_id, potluck_id }) => {
  const newFoodId = await db('potluck_food').insert({ food_id, potluck_id })
  // if the above is the id of the new food
  return newFoodId
}


module.exports = {
  findByName,
  getById,
  addFood,
  addFoodToPotluck,
}
