import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getAuthors } from '../../api/authorAPI';

const AuthorPage = () => {
  const [author, setAuthor] = useState([]);

  const getAuthorsData = async () => {
    const authors = await getAuthors();
    setAuthor(authors);
  };

  useEffect(() => {
    getAuthorsData();
  });

  return (
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
          {author.data &&
            author.data.map((row) => (
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
  );
};

export default AuthorPage;
