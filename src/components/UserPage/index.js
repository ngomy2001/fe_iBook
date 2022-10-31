import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button } from '@nextui-org/react';

/* import service */
import { getUsers } from '../../api/userAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';

const UserPage = () => {
  const [user, setUser] = useState([]);
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const getUsersData = async () => {
    const users = await getUsers();
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
        <Button auto shadow onClick={() => setVisibleCreatePopup(true)}>
          Add new user
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
            <Table.Column>ROLE</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column>PASSWORD</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {user.data &&
              user.data.map((row) => (
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
