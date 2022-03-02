import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({}).sort({departs: 'asc'}).exec ((error, flights) => {
    res.render("flights/", {
      error: error,
      flights: flights,
      title: "All Flights",
    })
  })
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {
    departsDate,
    title: "Add Flight"
  })
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

function show (req, res){
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      title: "Flight Details",
      flight: flight,
      // ticket: ticket,
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteTicket(req, res){
  console.log("before function", req.params.ticketId)
  Flight.findById(req.params.id, function(err, flight) {
    let index = 0;
    flight.tickets.forEach(ticket => {
      if (ticket._id === req.params.ticketId) {
        index = flight.tickets.indexOf(ticket)
      }
    })
    flight.tickets.splice(index, 1)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
})
}

export {
  index,
  newFlight as new,
  create,
  show,
  deleteFlight as delete,
  createTicket,
  deleteTicket,
}