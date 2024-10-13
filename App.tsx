import React, { useEffect, useState } from 'react';
import DateSelector from './components/DateSelector';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';
import { fetchBookings } from './api';

const App: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      fetchBookings(startDate.toISOString(), endDate.toISOString()).then(data => setBookings(data));
    }
  }, [startDate, endDate]);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <h1>Hotel Booking Dashboard</h1>
      <DateSelector onDateChange={handleDateChange} />
      <TimeSeriesChart data={bookings} />
      <ColumnChart data={bookings} />
      <SparklineChart title="Adult Visitors" data={bookings.map(b => b.adults)} />
      <SparklineChart title="Children Visitors" data={bookings.map(b => b.children)} />
    </div>
  );
};

export default App;
