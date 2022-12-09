import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
/* import NextUI component */
import { Table, Button, Input } from '@nextui-org/react';
import { CSVLink } from 'react-csv';

/* import service */
import { getInvoicesByUserId, searchInvoices } from '../../api/invoiceAPI';

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);

  let [searchInput, setSearchInput] = useState('');
  const userId = useSelector((state) => state.auth.payload.id);

  const getInvoicesData = async () => {
    const invoices = await getInvoicesByUserId(userId);
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
          <Button>
            <CSVLink data={invoices} filename={'invoiceData.csv'}>
              Export to CSV
            </CSVLink>
          </Button>
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
            <Table.Column>BOOK TITLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
            <Table.Column>CREATION DATE</Table.Column>
            <Table.Column>UPDATE DATE</Table.Column>
            <Table.Column>DUE DATE</Table.Column>
          </Table.Header>
          <Table.Body>
            {invoices &&
              invoices.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.bookCopyId.bookId.title}</Table.Cell>
                  <Table.Cell>{row.status}</Table.Cell>
                  <Table.Cell>{row.createdAt}</Table.Cell>
                  <Table.Cell>{row.updatedAt}</Table.Cell>
                  <Table.Cell>#</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default InvoicePage;
