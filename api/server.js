const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const { restricted } = require('./auth/authMw')

const potlucksRouter = require('./potlucks/potlucks-router')
const authRouter = require('./auth/auth-router')
const foodRouter = require('./food/food-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// server.use('/api/potlucks', restricted, potlucksRouter)
server.use('/api/potlucks', potlucksRouter)
server.use('/api/auth', authRouter)
server.use('/api/food', foodRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
