import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table } from '@nextui-org/react';
import { Button, Input } from '@nextui-org/react';

/* import service */
import { getAuthors, searchAuthors } from '../../api/authorAPI';

const AuthorPage = () => {
  const [author, setAuthor] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const getAuthorsData = async () => {
    const authors = await getAuthors();
    setAuthor(authors);
  };
  const getSearchedAuthorsData = async () => {
    if (!searchInput) {
      alert('Please enter keyword!');
      return;
    }
    const authors = await searchAuthors(searchInput);
    setAuthor(authors);
  };
  useEffect(() => {
    getAuthorsData();
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
          <Button onClick={() => getSearchedAuthorsData()}>Search</Button>
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
            <Table.Column>NAME</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {author &&
              author.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>
                    {row.firstName} {row.lastName}
                  </Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AuthorPage;
