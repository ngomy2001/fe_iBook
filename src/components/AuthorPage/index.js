import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getAuthors } from '../../api/authorAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';

import './style.css';
const AuthorPage = () => {
  const [author, setAuthor] = useState([]);

  const getAuthorsData = async () => {
    const authors = await getAuthors();
    setAuthor(authors);
  };

  useEffect(() => {
    getAuthorsData();
  }, [author]);

  return (
    <div className="table-space">
      <div>
        <Button auto shadow>
          Add new author
        </Button>
      </div>
      <div>
        <Table
          aria-label="Example table with static content"
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
                      <PrimaryButton label="Update"></PrimaryButton>
                      <PrimaryButton label="Delete"></PrimaryButton>
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

export default AuthorPage;
