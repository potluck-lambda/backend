const Potlucks = require('./potlucks-model')

const validatePotluck = async (req, res, next) => {
  const {
    organizer_id, 
    date, 
    time, 
    street_number, 
    street_name,
    state,
    zip_code 
  } = req.body
  if (
    organizer_id === undefined || !organizer_id ||
    date === undefined || !date ||
    time === undefined || !time ||
    street_number === undefined || !street_number ||
    street_name === undefined || !street_name ||
    state === undefined || !state ||
    zip_code === undefined || !zip_code
    ) {
      next({ status: 400, message: "a required field is invalid or missing" })
    } else {
      next()
    }
}

const validateEdit = async (req, res, next) => {
  const {
    date, 
    time, 
    street_number, 
    street_name,
    state,
    zip_code 
  } = req.body
  if (
      date === undefined || !date ||
      time === undefined || !time ||
      street_number === undefined || !street_number ||
      street_name === undefined || !street_name ||
      state === undefined || !state ||
      zip_code === undefined || !zip_code
    ) {
      next({ status: 400, message: "a required field is invalid or missing" })
    } else {
      next()
    }
}

module.exports = {
  validatePotluck,
  validateEdit,
}