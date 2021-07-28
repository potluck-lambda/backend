const router = require('express').Router();
const bcrypt = require('bcryptjs')

const Auth = require('./auth-model')
const { checkUsernameExists, checkUsernameUnique, checkBodyEntered } = require('./authMw')

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./secrets/index')

router.post('/sign-up', checkBodyEntered, checkUsernameUnique, (req, res, next) => {
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

router.post('/login', checkBodyEntered, checkUsernameExists, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = buildToken(req.user)
    res.json({
      message: `Welcome, ${req.user.username}`,
      token: token
    })
  }
  else {
    next({ status: 401, message: 'invalid credentials' })
  }
})

router.post('/test', (req, res, next) => {
  const { password } = req.body
  const hash = bcrypt.hashSync(password, 8)
  console.log(hash)
})

const buildToken = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    user_id: user.user_id
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router
