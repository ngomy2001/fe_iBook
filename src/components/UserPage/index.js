import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button, Input } from '@nextui-org/react';

/* import service */
import { getUsers, searchUsers } from '../../api/userAPI';
import { CSVLink } from 'react-csv';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';

const UserPage = () => {
  const [user, setUser] = useState([]);
  let [searchInput, setSearchInput] = useState('');
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const getUsersData = async () => {
    const users = await getUsers();
    setUser(users);
  };

  const getSearchedUsersData = async () => {
    if (!searchInput) {
      alert('Please enter keyword!');
      return;
    }
    const users = await searchUsers(searchInput);
    setUser(users);
  };

  const handleUpdate = async (
    id,
    firstName,
    lastName,
    role,
    email,
    password
  ) => {
    const details = { id, firstName, lastName, role, email, password };
    setUserDetails(details);
    setVisibleUpdatePopup(true);
    await getUsersData();
  };

  useEffect(() => {
    getUsersData();
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
          <Button onClick={() => getSearchedUsersData()}>Search</Button>
          <Button onClick={() => setVisibleCreatePopup(true)}>
            Add new user
          </Button>
          <Button>
            <CSVLink data={user} filename={'userData.csv'}>
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
            <Table.Column>FIRST NAME</Table.Column>
            <Table.Column>LAST NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column>PASSWORD</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {user &&
              user.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.firstName}</Table.Cell>
                  <Table.Cell>{row.lastName}</Table.Cell>
                  <Table.Cell>{row.role}</Table.Cell>
                  <Table.Cell>{row.email}</Table.Cell>
                  <Table.Cell>{row.password}</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      <PrimaryButton
                        label="Update"
                        onClick={() =>
                          handleUpdate(
                            row._id,
                            row.firstName,
                            row.lastName,
                            row.role,
                            row.email,
                            row.password
                          )
                        }
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
          onCreate={getUsersData}
        />
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          userDetails={userDetails}
          onCreate={getUsersData}
        />
      </div>
    </div>
  );
};

export default UserPage;
