import { Table, Modal, Button, Text, Input } from '@nextui-org/react';
import { getCategories, createCategory } from '../../api/categoryAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import React from 'react';
import PrimaryButton from '../customComponents/customButtonComponent/Button';

import './style.css';
const CategoryPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(
      '🚀 ~ file: index.js ~ line 15 ~ onSubmit ~ data',
      JSON.stringify(data)
    );
  };

  const [category, setData] = useState([]);
  const getData = async () => {
    const categories = await getCategories();
    setData(categories);
  };

  useEffect(() => {
    getData();
  }, []);

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  //Handle create a new category
  const handleAddNewCategory = async () => {
    const categoryName = document.querySelector('#categoryName').value;
    console.log(
      '🚀 ~ file: index.js ~ line 31 ~ handleAddNewCategory ~ categoryName',
      JSON.stringify(categoryName)
    );
    const categoryDescription = document.querySelector(
      '#categoryDescription'
    ).value;
    console.log(
      '🚀 ~ file: index.js ~ line 35 ~ handleAddNewCategory ~ categoryDescription',
      JSON.stringify(categoryDescription)
    );
    const payload = {
      categoryName,
      categoryDescription,
    };
    console.log('Payload:', payload);
    const newCategory = await createCategory(payload);
    return newCategory;
  };

  return (
    <div className="table-space">
      <div>
        <Button auto shadow onClick={handler}>
          Add new category
        </Button>

        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header>
              <Text id="modal-title" b size={18}>
                Add new category
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Controller
                render={({ field }) => (
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Enter the category name"
                    {...field}
                  />
                )}
                name="categoryName"
                control={control}
                defaultValue=""
              />
              <Controller
                render={({ field }) => (
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Enter the description"
                    {...field}
                  />
                )}
                name="categoryDescription"
                control={control}
                defaultValue=""
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
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
            <Table.Column>NAME</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
            <Table.Column>ACTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {category.data &&
              category.data.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                  <Table.Cell>
                    <div className="ActionGroupButton">
                      {/* <PrimaryButton label="View"></PrimaryButton> */}
                      <PrimaryButton
                        label="Update"
                        onClick={handler}
                      ></PrimaryButton>
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

export default CategoryPage;
