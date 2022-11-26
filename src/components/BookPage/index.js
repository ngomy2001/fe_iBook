import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getBooks, deleteBook, findBook } from '../../api/bookAPI';
/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';
import UploadPopup from './UploadPopup';
import ReadSamplePopup from './ReadSamplePopup';

import './style.css';

const BookPage = () => {
  const [book, setBook] = useState([]);
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [visibleUploadPopup, setVisibleUploadPopup] = useState(false);
  const [visibleReadSamplePopup, setVisibleReadSamplePopup] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [bookId, setBookId] = useState();
  const [sample, setSample] = useState('');

  const getBooksData = async () => {
    const books = await getBooks();
    setBook(books);
  };

  const handleUpdate = async (
    id,
    title,
    categoryId,
    authorId,
    publisherId,
    language,
    numberOfPages,
    numberOfCopies
  ) => {
    const details = {
      id,
      title,
      categoryId,
      authorId,
      publisherId,
      language,
      numberOfPages,
      numberOfCopies,
    };
    setBookDetails(details);
    setVisibleUpdatePopup(true);
    await getBooksData();
  };

  const handleDeleteBook = async (id) => {
    const deletedBook = await deleteBook(id);
    await getBooksData();
  };

  const handleUploadSample = async (id) => {
    setBookId(id);
    setVisibleUploadPopup(true);
    await getBooksData();
  };

  const handleReadSample = async (id) => {
    const foundBook = await findBook(id);
    const sampleURL = foundBook.sample;
    setSample(sampleURL);
    setVisibleReadSamplePopup(true);
    console.log('book', foundBook);
    console.log(sampleURL);
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
                      <PrimaryButton
                        label="Read sample"
                        onClick={() => handleReadSample(row._id)}
                      ></PrimaryButton>
                      <PrimaryButton
                        label="Upload sample"
                        onClick={() => handleUploadSample(row._id)}
                      ></PrimaryButton>
                      <PrimaryButton
                        label="Update"
                        onClick={() =>
                          handleUpdate(
                            row._id,
                            row.title,
                            row.categoryId,
                            row.authorId,
                            row.publisherId,
                            row.language,
                            row.numberOfPages,
                            row.numberOfCopies
                          )
                        }
                      ></PrimaryButton>
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
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          bookDetails={bookDetails}
          onCreate={getBooksData}
        />
        <UploadPopup
          visible={visibleUploadPopup}
          closeModal={setVisibleUploadPopup}
          bookId={bookId}
          onCreate={getBooksData}
        />
        <ReadSamplePopup
          visible={visibleReadSamplePopup}
          closeModal={setVisibleReadSamplePopup}
          sample={sample}
        />
      </div>
    </div>
  );
};

export default BookPage;
