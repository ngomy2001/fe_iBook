import axios from 'axios';

const getTransactions = async () => {
  try {
    const URL = 'http://localhost:3001/api/transaction';
    const transactions = await axios.get(URL);
    console.log(transactions);
    return transactions;
  } catch (error) {
    console.log(
      '🚀 ~ file: transactionAPI.js ~ line 10 ~ getTransactions ~ error',
      error
    );
  }
};

const createTransaction = async (transactionId, amount, status) => {
  try {
    const payload = { transactionId, amount, status };
    const URL = 'http://localhost:3001/api/transaction';
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: transactionAPI.js ~ line 25 ~ createTransaction ~ error',
      error
    );
  }
};

const updateTransaction = async (id, transactionId, amount, status) => {
  try {
    const payload = { transactionId, amount, status };
    const URL = `http://localhost:3001/api/transaction/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: transactionAPI.js ~ line 40 ~ updateTransaction ~ error',
      error
    );
  }
};

const deleteTransaction = async (id) => {
  try {
    const URL = `http://localhost:3001/api/transaction/${id}`;
    const response = await axios.delete(URL, id);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: transactionAPI.js ~ line 54 ~ deleteTransaction ~ error',
      error
    );
  }
};
export {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
