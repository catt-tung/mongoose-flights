import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

/* GET flights listing page - localhost:3000/flights */
router.get('/', flightsCtrl.index)

//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

export {
  router
}
