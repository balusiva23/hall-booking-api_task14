const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: String,
  date: Date,
  startTime: String,
  endTime: String,
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }
});

module.exports = mongoose.model('Booking', bookingSchema);
