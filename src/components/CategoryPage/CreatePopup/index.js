import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getCategories, createCategory } from '../../../api/categoryAPI';

const CreatePopup = ({ visible, closeModal, onCreate }) => {
  // const [category, setCategory] = useState([]);

  const { control, handleSubmit } = useForm();

  // const getData = async () => {
  //   const categories = await getCategories();
  //   setCategory(categories);
  // };

  const onSubmit = async (data) => {
    try {
      const response = await createCategory(
        data.categoryName,
        data.categoryDescription
      );
      console.log(
        '🚀 ~ file: index.js ~ line 25 ~ onSubmit ~ response',
        JSON.stringify(response)
      );
      onCreate();
      closeModal(false);
      console.log(response);
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 25 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
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
          <Button auto flat color="error" onClick={() => closeModal(false)}>
            Close
          </Button>
          <Button
            auto
            type="submit"
            // onClick={() => {
            //   getData();
            // }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreatePopup;
