import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      error: error,
      flights: flights,
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

export {
  index,
  newFlight as new,
}