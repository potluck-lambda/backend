const router = require('express').Router()
const Foods = require('./food-model')
const { checkIfFoodExists } = require('./food-mw')

// router.post('/:potluck_id', checkIfFoodExists, (req, res, next) => {
router.post('/:potluck_id', (req, res, next) => {
  // const { potluck_id } = req.params
  // const { food_id } = req.food_id
  // Foods.addFoodToPotluck(food_id, potluck_id)
  //   .then(stuff => {
  //     res.json(stuff)
  //     next()
  //   })
  //   .catch(next)
  
  // Foods.findByName('pizza')
  //   .then(food => {
  //     res.json(food)
  //   })
  //   .catch(next)

  // Foods.addFood({ food_name: 'salad' })
  //   .then(stuff => {
  //     res.json(stuff)
  //   })
  //   .catch(next)

  Foods.addFoodToPotluck({ food_id: 1, potluck_id: 1 })
    .then(stuff => {
      res.json(stuff)
    })
    .catch(next)


})


module.exports = router
