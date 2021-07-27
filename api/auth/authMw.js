const Auth = require('./auth-model')

const checkUsernameUnique = async (req, res, next) => {
  const existing = await Auth.findByUsername(req.body.username)
  if (existing) {
    next({ status: 400, message: 'username taken' })
  } else {
    next()
  }
}

const checkUsernameExists = async (req, res, next) => {
  const existing = await Auth.findByUsername(req.body.username)
  if (existing) {
    req.user = existing
    next()
  } else {
    next({ status: 400, message: "User does not exist in the system" })
  }
}

const checkBodyEntered = (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password || username === undefined || password === undefined) {
    next({ status: 400, message: "username and password required" })
  } else {
    next()
  }
}


module.exports = {
  checkUsernameExists,
  checkUsernameUnique,
  checkBodyEntered,
}
