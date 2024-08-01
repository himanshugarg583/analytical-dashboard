import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['CPU', 'Memory', 'Disk', 'Network'],
  datasets: [
    {
      label: 'Usage',
      data: [40, 60, 20, 80],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const HealthMonitoring = () => (
  <div>
    <h2>System Health Monitoring</h2>
    <Line data={data} options={options} />
  </div>
);

export default HealthMonitoring;
