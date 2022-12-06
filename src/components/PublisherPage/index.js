import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button, Input } from '@nextui-org/react';
import { CSVLink } from 'react-csv';
/* import service */
import {
  getPublishers,
  deletePublisher,
  searchPublishers,
} from '../../api/publisherAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';

const PublisherPage = () => {
  const [publisher, setPublisher] = useState([]);
  let [searchInput, setSearchInput] = useState('');
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [publisherDetails, setPublisherDetails] = useState([]);

  const getPublisherData = async () => {
    const publishers = await getPublishers();
    console.log(
      '🚀 ~ file: index.js ~ line 24 ~ getPublisherData ~ publishers',
      publishers
    );
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
          <Button onClick={() => setVisibleCreatePopup(true)}>
            Add new publisher
          </Button>
          <Button>
            <CSVLink data={publisher} filename={'publisherData.csv'}>
              Export to CSV
            </CSVLink>
          </Button>
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
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {publisher &&
              publisher.map((row) => (
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
          onCreate={getPublisherData}
        />
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          publisherDetails={publisherDetails}
          onCreate={getPublisherData}
        />
      </div>
    </div>
  );
};

export default PublisherPage;
