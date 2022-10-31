import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { createUser } from '../../../api/userAPI';

const CreatePopup = ({ visible, closeModal, onCreate }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await createUser(
        data.firstName,
        data.lastName,
        data.role,
        data.email,
        data.password
      );
      onCreate();
      closeModal(false);
      return response;
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 30 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Add new user
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
                placeholder="Enter the first name"
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
                placeholder="Enter the last name"
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
                placeholder="Enter the role of user"
                {...field}
              />
            )}
            name="role"
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
                placeholder="Enter the user email"
                {...field}
              />
            )}
            name="email"
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
                placeholder="Enter the user password"
                {...field}
              />
            )}
            name="password"
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

export default CreatePopup;
