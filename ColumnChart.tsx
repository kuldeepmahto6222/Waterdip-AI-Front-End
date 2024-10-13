import React from 'react';
import Chart from 'react-apexcharts';

interface ColumnChartProps {
  data: any[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const series = [{
    name: 'Visitors',
    data: data.reduce((acc, booking) => {
      const country = booking.country;
      acc[country] = (acc[country] || 0) + booking.adults + booking.children + booking.babies;
      return acc;
    }, {})
  }];

  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: Object.keys(series[0].data) },
    dataLabels: { enabled: true },
  };

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
