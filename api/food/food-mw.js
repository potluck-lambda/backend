const Foods = require('./food-model')

const checkIfFoodExists = (req, res, next) => {
  const { food_name } = req.body
  Foods.findByName(food_name)
    .then(food => {
      if(!food) {
        Foods.addFood(req.body)
          .then(food => {
            req.food_id = food.food_id
            next()
          })
      }
      else {
        req.food_id = food.food_id
        next()
      }
    })
    .catch(next)
}

module.exports = {
  checkIfFoodExists,
}
