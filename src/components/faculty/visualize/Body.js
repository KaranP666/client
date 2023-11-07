import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Body = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [{
      name: 'Series 1',
      data: [50, 70, 60,40, 80, 90],
    }],
    chart: {
      height: 1750,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart',
    },
    xaxis: {
      categories: ['R programming', 'Tableau', 'Power BI', 'Excel', 'SQL', 'Presentation skills'],
    },
    yaxis: {
    max: 100, // Set the maximum value for the y-axis
  },

  });

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="radar" height={350} />
    </div>
  );
};

export default Body;
