import axios from 'axios';

const createInvoice = async (userId, bookCopyId) => {
  try {
    const payload = { userId, bookCopyId, status: 'Waiting' };
    const URL = 'http://localhost:3001/api/invoice/createInvoice';
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 11 ~ createInvoice ~ error',
      error
    );
  }
};

export { createInvoice };
