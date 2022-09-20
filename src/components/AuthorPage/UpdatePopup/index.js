import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getAuthors, updateAuthor } from '../../../api/authorAPI';

const UpdatePopup = ({ visible, closeModal, authorDetails }) => {
  const [author, setAuthor] = useState([]);
  const { control, handleSubmit } = useForm();

  const getAuthorsData = async () => {
    const authors = await getAuthors();
    setAuthor(authors);
  };

  const onSubmit = async (data) => {
    try {
      const response = await updateAuthor(
        authorDetails.id,
        data.firstName,
        data.lastName,
        data.description
      );
      console.log(response);
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 28 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Update author
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
                placeholder="Enter the author first name"
                {...field}
              />
            )}
            name="firstName"
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
                placeholder="Enter the author last name"
                {...field}
              />
            )}
            name="lastName"
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
            name="description"
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
              getAuthorsData();
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
