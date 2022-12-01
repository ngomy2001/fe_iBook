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

const AAExample = [
  {
    monthValue: 1,
    numberOfBookVal: 0,
  },
  {
    monthValue: 2,
    numberOfBookVal: 0,
  },
  {
    monthValue: 3,
    numberOfBookVal: 0,
  },
  {
    monthValue: 4,
    numberOfBookVal: 0,
  },
  {
    monthValue: 5,
    numberOfBookVal: 0,
  },
  {
    monthValue: 6,
    numberOfBookVal: 0,
  },
  {
    monthValue: 7,
    numberOfBookVal: 0,
  },
  {
    monthValue: 8,
    numberOfBookVal: 0,
  },
  {
    monthValue: 9,
    numberOfBookVal: 1,
  },
  {
    monthValue: 10,
    numberOfBookVal: 1,
  },
  {
    monthValue: 11,
    numberOfBookVal: 2,
  },
  {
    monthValue: 12,
    numberOfBookVal: 0,
  },
];
const InsightPage = () => {
  const { isLoading, error, data } = useQuery(
    'monthlyBooks',
    countBookEachMonth
  );
  console.log('aa', data);
  const Bookdata = {
    labels,
    datasets: [
      {
        label: 'Number of Book',
        data: AAExample.map((item) => item.numberOfBookVal),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div>
      <p>Hello</p>
      <Bar options={options} data={Bookdata} />
    </div>
  );
};

export default InsightPage;
