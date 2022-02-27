import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    range: [10, 9999]
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getDate()
      //need to add a year and get only the date without the time
    } 
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}