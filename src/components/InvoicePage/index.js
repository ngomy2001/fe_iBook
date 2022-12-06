import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button, Input } from '@nextui-org/react';

/* import service */
import { getInvoices, searchInvoices } from '../../api/invoiceAPI';
/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import UpdatePopup from './UpdatePopup';

import './style.css';

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);
  let [searchInput, setSearchInput] = useState('');
  const [invoiceDetails, setinvoiceDetails] = useState('');
  const [invoiceId, setInvoiceId] = useState();
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);

  const getInvoicesData = async () => {
    const invoices = await getInvoices();
    setInvoices(invoices);
  };

  const getSearchedInvoicesData = async () => {
    if (!searchInput) {
      alert('Please enter keyword!');
      return;
    }
    const invoices = await searchInvoices(searchInput);
    setInvoices(invoices);
  };
  const handleUpdate = async (id, status) => {
    setInvoiceId(id);
    setinvoiceDetails(status);
    setVisibleUpdatePopup(true);
    await getInvoicesData();
  };

  useEffect(() => {
    getInvoicesData();
  }, []);
  return (
    <div className="table-space">
      <div>
        <Input
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          bordered
          clearable
          color="error"
        />
        <Button.Group color="error" flat>
          <Button onClick={() => getSearchedInvoicesData()}>Search</Button>
          <Button>Export file</Button>
        </Button.Group>
      </div>
      <div>
        <Table
          css={{
            height: 'auto',
            minWidth: '100%',
            backgroundColor: '#ffffff',
          }}
        >
          <Table.Header>
            <Table.Column>FULL NAME</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column>BOOK TITLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
            <Table.Column>CREATION DATE</Table.Column>
            <Table.Column>UPDATE DATE</Table.Column>
            <Table.Column>DUE DATE</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {invoices &&
              invoices.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>
                    {row.userId.firstName + ' ' + row.userId.firstName}
                  </Table.Cell>
                  <Table.Cell>{row.userId.email}</Table.Cell>
                  <Table.Cell>{row.bookCopyId.bookId.title}</Table.Cell>
                  <Table.Cell>{row.status}</Table.Cell>
                  <Table.Cell>{row.createdAt}</Table.Cell>
                  <Table.Cell>{row.updatedAt}</Table.Cell>
                  <Table.Cell>#</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      <PrimaryButton
                        label="Update"
                        onClick={() => handleUpdate(row._id, row.status)}
                      ></PrimaryButton>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          invoiceId={invoiceId}
          invoiceDetails={invoiceDetails}
          onCreate={getInvoicesData}
        />
      </div>
    </div>
  );
};

export default InvoicePage;
