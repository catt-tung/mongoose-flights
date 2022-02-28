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
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {departsDate})
}

function create (req, res) {
  if (req.body.departs === '') {
    delete req.body.departs
  }
  const flight = new Flight(req.body)
  console.log(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
  })
  res.redirect('/flights')
}

export {
  index,
  newFlight as new,
  create,
}