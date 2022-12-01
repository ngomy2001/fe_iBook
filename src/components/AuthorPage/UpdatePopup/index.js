import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { updateAuthor } from '../../../api/authorAPI';

const UpdatePopup = ({ visible, closeModal, authorDetails, onCreate }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updateAuthor(
        authorDetails.id,
        data.firstName,
        data.lastName,
        data.description
      );
      onCreate();
      closeModal(false);
      return response;
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
          <Text h6>First name:</Text>
          <Controller
            render={({ field }) => (
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={authorDetails.firstName}
                {...field}
              />
            )}
            name="firstName"
            control={control}
            defaultValue=""
          />
          <Text h6>Last name:</Text>
          <Controller
            render={({ field }) => (
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={authorDetails.lastName}
                {...field}
              />
            )}
            name="lastName"
            control={control}
            defaultValue=""
          />
          <Text h6>Description:</Text>
          <Controller
            render={({ field }) => (
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={authorDetails.description}
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
          <Button auto type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UpdatePopup;
