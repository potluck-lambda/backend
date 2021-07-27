const router = require('express').Router()
const Potlucks = require('./potlucks-model')

// need to get, add, update, and delete potlucks

// router.get('', (req, res, next) => {})

router.get('/', (req, res, next) => {
  Potlucks.getAll()
    .then(potlucks => {
      res.json(potlucks)
    })
    .catch(next)
  // res.json({
  //   message: 'see the potlucks'
  // })
})



module.exports = router