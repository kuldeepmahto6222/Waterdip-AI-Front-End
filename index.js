const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const bookings = require('./hotel_bookings_1000.json'); // Assume CSV is converted to JSON

app.get('/bookings', (req, res) => {
  const { startDate, endDate } = req.query;
  const filteredData = bookings.filter(booking => {
    const bookingDate = new Date(
      booking.arrival_date_year,
      booking.arrival_date_month - 1,
      booking.arrival_date_day_of_month
    );
    return bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate);
  });
  res.json(filteredData);
});

app.listen(5000, () => console.log('Server running on port 5000'));
