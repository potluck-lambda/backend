const router = require('express').Router()
const Potlucks = require('./potlucks-model')
const { validatePotluck, validateEdit } = require('./potlucksMw')

// need to get, add, update, and delete potlucks

// router.get('', (req, res, next) => {})

router.get('/', (req, res, next) => {
  Potlucks.getAll()
    .then(potlucks => {
      res.json(potlucks)
    })
    .catch(next)
})

router.get('/:potluck_id', (req, res, next) => {
  const { potluck_id } = req.params
  Potlucks.getById(potluck_id)
    .then(potluck => {
      res.json(potluck)
    })
    .catch(next)
})

router.post('/', validatePotluck, (req, res, next) => {
  Potlucks.addPotluck(req.body)
    .then(potluck => {
      res.status(201).json(potluck)
    })
    .catch(next)
})

router.put('/:potluck_id', validateEdit, (req, res, next) => {
  const { potluck_id } = req.params
  Potlucks.editPL(potluck_id, req.body)
    .then(changedPL => {
      res.json(changedPL)
    })
    .catch(next)
})

router.delete('/:potluck_id', (req, res, next) => {
  const { potluck_id } = req.params
  Potlucks.deletePL(potluck_id)
    .then(stuff => {
      res.json({ status: 200, message: 'You have removed the potluck indicated', removed: stuff })
    })
    .catch(next)
})

module.exports = router