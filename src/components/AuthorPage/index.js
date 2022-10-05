import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getAuthors, deleteAuthor } from '../../api/authorAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';
const AuthorPage = () => {
  const [author, setAuthor] = useState([]);
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [authorDetails, setAuthorDetails] = useState([]);

  const getAuthorsData = async () => {
    const authors = await getAuthors();
    setAuthor(authors);
  };

  const handleUpdate = async (id, firstName, lastName, description) => {
    const details = { id, firstName, lastName, description };
    setAuthorDetails(details);
    setVisibleUpdatePopup(true);
    await getAuthorsData();
  };

  const handleDelete = async (id) => {
    const deletedAuthor = await deleteAuthor(id);
    await getAuthorsData();
  };

  useEffect(() => {
    getAuthorsData();
  }, []);

  return (
    <div className="table-space">
      <div>
        <Button auto shadow onClick={() => setVisibleCreatePopup(true)}>
          Add new author
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
            <Table.Column>FIRST NAME</Table.Column>
            <Table.Column>LAST NAME</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {author.data &&
              author.data.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.firstName}</Table.Cell>
                  <Table.Cell>{row.lastName}</Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      <PrimaryButton
                        label="Update"
                        onClick={() =>
                          handleUpdate(
                            row._id,
                            row.firstName,
                            row.lastName,
                            row.description
                          )
                        }
                      ></PrimaryButton>
                      <PrimaryButton
                        label="Delete"
                        onClick={() => handleDelete(row._id)}
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
        />
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          authorDetails={authorDetails}
        />
      </div>
    </div>
  );
};

export default AuthorPage;
