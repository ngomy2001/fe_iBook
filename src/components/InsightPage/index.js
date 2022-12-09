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
import { Card, Grid, Text } from '@nextui-org/react';

/* import service */
import { countBookEachMonth } from '../../api/bookAPI';
import { getMonthlyInvoices, calculateBudget } from '../../api/invoiceAPI';
import { getMonthlyUsers } from '../../api/userAPI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const bookOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Books',
    },
  },
};
export const InvoiceOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Invoices',
    },
  },
};
export const UserOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Users',
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
  const [monthlyInvoices, setMonthlyInvoices] = useState([]);
  const [monthlyUsers, setMonthlyUsers] = useState([]);
  const [currentBudget, setcurrentBudget] = useState([]);
  console.log(
    '🚀 ~ file: index.js ~ line 88 ~ InsightPage ~ currentBudget',
    currentBudget
  );
  const getInvoicesData = async () => {
    const invoices = await getMonthlyInvoices();
    setMonthlyInvoices(invoices);
  };
  const getUsersData = async () => {
    const users = await getMonthlyUsers();
    setMonthlyUsers(users);
  };
  const getBudgetData = async () => {
    const response = await calculateBudget();
    setcurrentBudget(response);
  };

  useEffect(() => {
    getInvoicesData();
    getUsersData();
    getBudgetData();
  }, []);
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
    const monthlyInvoicesData = {
      labels,
      datasets: [
        {
          label: 'Number of Invoice',
          data: monthlyInvoices.map((item) => item.numberOfInvoiceVal),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    const monthlyUsersData = {
      labels,
      datasets: [
        {
          label: 'Number of User',
          data: monthlyUsers.map((item) => item.numberOfAccountVal),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return (
      <div>
        <Grid.Container gap={2}>
          <Grid xs={4}>
            <Card>
              <Card.Body>
                <Text>
                  <h3>Current Budget: </h3>
                  <h4>${currentBudget.currentBudgetVal}.00</h4>
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card>
              <Card.Body>
                <Text>
                  <h3>Revenue: </h3>
                  <h4>${currentBudget.revenueVal}.00</h4>
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card>
              <Card.Body>
                <Text>
                  <h3>Refund: </h3>
                  <h4>${currentBudget.refundVal}.00</h4>
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Bar options={bookOptions} data={monthlyBookData} />
        <Bar options={InvoiceOptions} data={monthlyInvoicesData} />
        <Bar options={UserOptions} data={monthlyUsersData} />
      </div>
    );
  }
};

export default InsightPage;
