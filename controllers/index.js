const Room = require('../models/Room');
const Booking = require('../models/Booking');

exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: 'Error creating room' });
  }
};

exports.bookRoom = async (req, res) => {
  try {
    const { roomId, date, startTime, endTime } = req.body;

    const existingBooking = await Booking.findOne({
      roomId,
      date,
      $or: [
        { startTime: { $lt: startTime }, endTime: { $gt: startTime } },
        { startTime: { $lt: endTime }, endTime: { $gt: endTime } }
      ]
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'Room already booked for the specified time' });
    }

    const booking = await Booking.create(req.body);
    await Room.findByIdAndUpdate(roomId, { isBooked: true });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error booking room' });
  }
};

exports.listRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching rooms' });
  }
};

exports.listCustomers = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('roomId', 'name');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching customers' });
  }
};
