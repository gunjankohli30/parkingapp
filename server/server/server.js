const express = require('express');
const parkingRoutes = require('./routes/ParkingRoutes');

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use ParkingRoutes
app.use('/parking', parkingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});