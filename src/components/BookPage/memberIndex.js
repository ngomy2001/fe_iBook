import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

/* import service */
import { getBooks } from '../../api/bookAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import PaypalCheckoutButton from '../PayPal';
//import PayPal from '../PayPal/index';

import './style.css';

const BookPage = () => {
  const [book, setBook] = useState([]);

  const item = {
    description: 'Design+Code React Hooks book',
    price: 5,
  };
  const getBooksData = async () => {
    const books = await getBooks();
    setBook(books);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <div className="table-space">
      <div>
        <Button.Group color="error" flat>
          <Button>Search</Button>
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
            <Table.Column>TITLE</Table.Column>
            <Table.Column>CATEGORY</Table.Column>
            <Table.Column>AUTHOR</Table.Column>
            <Table.Column>PUBLISHER</Table.Column>
            <Table.Column>LANGUAGE</Table.Column>
            <Table.Column>NUMBER OF PAGES</Table.Column>
            <Table.Column>NUMBER OF COPIES</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {book &&
              book.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.title}</Table.Cell>
                  <Table.Cell>{row.categoryId.name}</Table.Cell>
                  <Table.Cell>
                    {row.authorId.firstName} {row.authorId.lastName}
                  </Table.Cell>
                  <Table.Cell>{row.publisherId.name}</Table.Cell>
                  <Table.Cell>{row.language}</Table.Cell>
                  <Table.Cell>{row.numberOfPages}</Table.Cell>
                  <Table.Cell>{row.numberOfCopies}</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      <PrimaryButton label="Read sample"></PrimaryButton>
                      <PaypalCheckoutButton product={item} bookId={row._id}>
                        {' '}
                      </PaypalCheckoutButton>
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

export default BookPage;
