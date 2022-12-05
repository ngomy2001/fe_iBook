import axios from 'axios';

const createInvoice = async (data) => {
  try {
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 4 ~ createInvoice ~ data',
      data
    );

    const URL = 'http://localhost:3001/api/invoice/createInvoice';
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 7 ~ createInvoice ~ data',
      data
    );
    const response = await axios.post(URL, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 11 ~ createInvoice ~ error',
      error
    );
  }
};
const getInvoices = async () => {
  try {
    const URL = 'http://localhost:3001/api/invoice';
    const invoices = await axios.get(URL);
    return invoices;
  } catch (error) {
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 31 ~ getInvoices ~ error',
      error
    );
  }
};
const updateInvoiceStatus = async (id, status) => {
  try {
    const data = { status };
    const URL = `http://localhost:3001/api/invoice/updateStatus/${id}`;
    const response = await axios.put(URL, data);
    return response.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: invoiceAPI.js ~ line 44 ~ updateInvoiceStatus ~ error',
      error
    );
  }
};
export { createInvoice, getInvoices, updateInvoiceStatus };
