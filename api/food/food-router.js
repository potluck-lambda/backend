const router = require('express').Router()
const Foods = require('./food-model')
const { checkIfFoodExists } = require('./food-mw')

router.post('/:potluck_id', checkIfFoodExists, (req, res, next) => {
// router.post('/:potluck_id', (req, res, next) => {
  const { potluck_id } = req.params
  const { food_id } = req
  Foods.addFoodToPotluck({ food_id, potluck_id })
    .then(stuff => {
      res.json({message: `food ${food_id} was succesfully added to your potluck ${potluck_id}`})
      next()
    })
    .catch(next)
  
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

  // Foods.addFoodToPotluck({ food_id: 1, potluck_id: 1 })
  //   .then(stuff => {
  //     res.json({message: 'food potluck relationship added' })
  //   })
  //   .catch(next)


})


module.exports = router
