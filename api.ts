import axios from 'axios';

export const fetchBookings = async (startDate: string, endDate: string) => {
  const response = await axios.get('http://localhost:5000/bookings', {
    params: { startDate, endDate },
  });
  return response.data;
};
