import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table } from '@nextui-org/react';

/* import service */
import { getPublishers } from '../../api/publisherAPI';

const PublisherPage = () => {
  const [publisher, setPublisher] = useState([]);

  const getPublisherData = async () => {
    const publishers = await getPublishers();
    setPublisher(publishers);
  };

  useEffect(() => {
    getPublisherData();
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
          {publisher.data &&
            publisher.data.map((row) => (
              <Table.Row key={row._id}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.description}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PublisherPage;
