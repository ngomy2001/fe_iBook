import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getInvoices } from '../../api/invoiceAPI';
/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';

import './style.css';

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);

  const getInvoicesData = async () => {
    const invoices = await getInvoices();
    setInvoices(invoices);
  };

  useEffect(() => {
    getInvoicesData();
  }, []);
  return (
    <div className="table-space">
      <div>
        <Button.Group color="error" flat>
          <Button>Search</Button>
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
            {invoices.data &&
              invoices.data.map((row) => (
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
                      <PrimaryButton label="Update"></PrimaryButton>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default InvoicePage;
