const express = require('express');
const { getAllParkingSpots, getParkingSpotById, createParkingSpot, updateParkingSpot, deleteParkingSpot } = require('../controllers/ParkingController');

const router = express.Router();

// Controller functions (you need to implement these)

// Routes
router.get('/parkingspots', getAllParkingSpots);
router.get('/parkingspots/:id', getParkingSpotById);
router.post('/parkingspots', createParkingSpot);
router.put('/parkingspots/:id', updateParkingSpot);
router.delete('/parkingspots/:id', deleteParkingSpot);

module.exports = router;