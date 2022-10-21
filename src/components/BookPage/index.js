import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getBooks, deleteBook } from '../../api/bookAPI';
import { getPublishers } from '../../api/publisherAPI';
/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';

import './style.css';

const BookPage = () => {
  const [book, setBook] = useState([]);
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  //const [bookDetails, setBookDetails] = useState([]);

  const getBooksData = async () => {
    const books = await getBooks();
    setBook(books);
  };

  const handleDeleteBook = async (id) => {
    const deletedBook = await deleteBook(id);
    await getBooksData();
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <div className="table-space">
      <div>
        <Button auto shadow onClick={() => setVisibleCreatePopup(true)}>
          Add new book
        </Button>
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
            {book.data &&
              book.data.map((row) => (
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
                      <PrimaryButton label="Update"></PrimaryButton>
                      <PrimaryButton
                        label="Delete"
                        onClick={() => handleDeleteBook(row._id)}
                      ></PrimaryButton>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>

        <CreatePopup
          visible={visibleCreatePopup}
          closeModal={setVisibleCreatePopup}
          onCreate={getBooksData}
        />
      </div>
    </div>
  );
};

export default BookPage;
