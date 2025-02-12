import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Blocked IPs', 'Allowed IPs', 'Suspicious IPs'],
  datasets: [
    {
      label: 'Blocking Status',
      data: [400, 300, 300],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const BlockingPieChart = () => (
  <div>
    <h2>Blocking Pie Chart</h2>
    <Pie data={data} />
  </div>
);

export default BlockingPieChart;
