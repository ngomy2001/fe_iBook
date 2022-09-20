import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getPublishers, deletePublisher } from '../../api/publisherAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';

const PublisherPage = () => {
  const [publisher, setPublisher] = useState([]);
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [publisherDetails, setPublisherDetails] = useState([]);

  const getPublisherData = async () => {
    const publishers = await getPublishers();
    setPublisher(publishers);
  };

  const handleUpdate = async (id, name, description) => {
    const details = { id, name, description };
    setPublisherDetails(details);
    setVisibleUpdatePopup(true);
    await getPublisherData();
  };

  const handleDelete = async (id) => {
    const deletedPublisher = await deletePublisher(id);
    await getPublisherData();
  };

  useEffect(() => {
    getPublisherData();
  }, [publisher]);

  return (
    <div className="table-space">
      <div>
        <Button auto shadow onClick={() => setVisibleCreatePopup(true)}>
          Add new publisher
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
            <Table.Column>NAME</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {publisher.data &&
              publisher.data.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      <PrimaryButton
                        label="Update"
                        onClick={() =>
                          handleUpdate(row._id, row.name, row.description)
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
          publisherDetails={publisherDetails}
        />
      </div>
    </div>
  );
};

export default PublisherPage;
