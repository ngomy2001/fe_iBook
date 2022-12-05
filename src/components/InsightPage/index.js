import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';

/* import service */
import { countBookEachMonth } from '../../api/bookAPI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const InsightPage = () => {
  const { isLoading, error, data } = useQuery(
    'monthlyBooks',
    countBookEachMonth
  );

  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  if (data) {
    const monthlyBookData = {
      labels,
      datasets: [
        {
          label: 'Number of Book',

          data: data.map((item) => item.numberOfBookVal),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
      <div>
        <Bar options={options} data={monthlyBookData} />
      </div>
    );
  }
};

export default InsightPage;
