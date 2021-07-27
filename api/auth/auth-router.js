const router = require('express').Router();
const bcrypt = require('bcryptjs')

const Auth = require('./auth-model')

const jwt = require('jsonwebtoken')
// const { JWT_SECRET } = require('')

router.post('/sign-up', (req, res, next) => {
  const { username, password } = req.body
  const hash = bcrypt.hashSync(password, 8)
  Auth.addUser({ username, password: hash })
    .then(newUser => {
      res.status(201).json({ 
          message: `Welcome ${username}, you've signed up`
        })
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
  // if (bcrypt.compareSync(req.body.password, req.user.password))
  
})

module.exports = router
