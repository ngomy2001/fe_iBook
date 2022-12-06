import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table, Button, Input } from '@nextui-org/react';

/* import service */
import {
  getCategories,
  deleteCategory,
  searchCategories,
} from '../../api/categoryAPI';

/* import component */
import PrimaryButton from '../customComponents/customButtonComponent/Button';
import CreatePopup from './CreatePopup';
import UpdatePopup from './UpdatePopup';

import './style.css';
const CategoryPage = () => {
  const [category, setData] = useState([]);
  let [searchInput, setSearchInput] = useState('');
  const [visibleCreatePopup, setVisibleCreatePopup] = useState(false);
  const [visibleUpdatePopup, setVisibleUpdatePopup] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState([]);

  const getData = async () => {
    const categories = await getCategories();
    setData(categories);
  };

  const getSearchedCategoriesData = async () => {
    if (!searchInput) {
      alert('Please enter keyword!');
      return;
    }
    const categories = await searchCategories(searchInput);
    setData(categories);
  };

  const handleUpdate = async (id, name, description) => {
    const details = { id, name, description };
    setCategoryDetails(details);
    setVisibleUpdatePopup(true);
    await getData();
  };

  const handleDelete = async (id) => {
    const deletedCategory = await deleteCategory(id);
    await getData();
  };

  useEffect(() => {
    getData();
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
          <Button onClick={() => getSearchedCategoriesData()}>Search</Button>
          <Button onClick={() => setVisibleCreatePopup(true)}>
            Add new category
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
            {category &&
              category.map((row) => (
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
          onCreate={getData}
        />
        <UpdatePopup
          visible={visibleUpdatePopup}
          closeModal={setVisibleUpdatePopup}
          categoryDetails={categoryDetails}
          onCreate={getData}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
