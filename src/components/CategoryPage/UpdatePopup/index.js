import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getCategories, updateCategory } from '../../../api/categoryAPI';

const UpdatePopup = ({ visible, closeModal, categoryDetails }) => {
  const [category, setData] = useState([]);
  const { control, handleSubmit } = useForm();

  const getData = async () => {
    const categories = await getCategories();
    setData(categories);
  };

  const onSubmit = async (data) => {
    try {
      const response = await updateCategory(
        categoryDetails.id,
        data.categoryName,
        data.categoryDescription
      );
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
            Update category
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
                placeholder={categoryDetails.name}
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
                placeholder={categoryDetails.description}
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
            onClick={() => {
              closeModal(false);
              getData();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UpdatePopup;
