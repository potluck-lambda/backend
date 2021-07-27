const router = require('express').Router();
const bcrypt = require('bcryptjs')

const Auth = require('./auth-model')

const jwt = require('jsonwebtoken')
// const { JWT_SECRET } = require('')

router.post('/sign-up', (req, res, next) => {
  
})

router.post('/login', (req, res, next) => {
  
})

module.exports = router
