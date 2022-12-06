import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table } from '@nextui-org/react';
import { Button, Input } from '@nextui-org/react';

/* import service */
import { getPublishers, searchPublishers } from '../../api/publisherAPI';

const PublisherPage = () => {
  const [publisher, setPublisher] = useState([]);
  let [searchInput, setSearchInput] = useState('');
  const getPublisherData = async () => {
    const publishers = await getPublishers();
    setPublisher(publishers);
  };
  const getSearchedPublishersData = async () => {
    if (!searchInput) {
      alert('Please enter keyword!');
      return;
    }
    const publishers = await searchPublishers(searchInput);
    setPublisher(publishers);
  };
  useEffect(() => {
    getPublisherData();
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
          <Button onClick={() => getSearchedPublishersData()}>Search</Button>
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
            {publisher &&
              publisher.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default PublisherPage;
