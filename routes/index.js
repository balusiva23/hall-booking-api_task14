const express = require('express');
const router = express.Router();

const { createRoom, bookRoom, listRooms, listCustomers } = require('../controllers');

router.post('/rooms', createRoom);
router.post('/bookings', bookRoom);
router.get('/rooms', listRooms);
router.get('/customers', listCustomers);

module.exports = router;
