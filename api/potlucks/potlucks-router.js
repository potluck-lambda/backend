const router = require('express').Router()
const Potlucks = require('./potlucks-model')
const { validatePotluck } = require('./potlucksMw')

// need to get, add, update, and delete potlucks

// router.get('', (req, res, next) => {})

router.get('/', (req, res, next) => {
  Potlucks.getAll()
    .then(potlucks => {
      res.json(potlucks)
    })
    .catch(next)
})

router.post('/', validatePotluck, (req, res, next) => {
  Potlucks.addPotluck(req.body)
    .then(potluck => {
      res.status(201).json(potluck)
    })
    .catch(next)
  // res.json({message: 'reached'})
})

router.put('/:potluck_id', (req, res, next) => {
  res.json({
    message: 'edit a potluck'
  })
})

router.delete('/:potluck_id', (req, res, next) => {
  res.json({
    message: 'delete a potluck'
  })
})

module.exports = router