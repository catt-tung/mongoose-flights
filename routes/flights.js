import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

/* GET flights listing page - localhost:3000/flights */
router.get('/', flightsCtrl.index)
//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
//GET localhost:3000/flights/:flightNo
router.get('/:id', flightsCtrl.show)

//POST /flights
router.post('/', flightsCtrl.create)
//POST /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

//DELETE flights/:id
router.delete('/:id', flightsCtrl.delete)

export {
  router
}
