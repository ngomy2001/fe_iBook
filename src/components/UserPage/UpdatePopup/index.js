import React, { useState } from 'react';
import ReactSelect from 'react-select';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getUsers, updateUser } from '../../../api/userAPI';

const UpdatePopup = ({ visible, closeModal, userDetails, onCreate }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updateUser(
        userDetails.id,
        data.firstName,
        data.lastName,
        data.role.value,
        data.email,
        data.password
      );
      onCreate();
      closeModal(false);
      return response;
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 29 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Update user
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
                placeholder={userDetails.firstName}
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
                placeholder={userDetails.lastName}
                {...field}
              />
            )}
            name="lastName"
            control={control}
            defaultValue=""
          />
          <Text h6>Role:</Text>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                placeholder={userDetails.role}
                options={[
                  { value: 'Librarian', label: 'Librarian' },
                  { value: 'Member', label: 'Member' },
                ]}
              />
            )}
          />
          <Text h6>Email:</Text>
          <Controller
            render={({ field }) => (
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={userDetails.email}
                {...field}
              />
            )}
            name="email"
            control={control}
            defaultValue=""
          />
          <Text h6>Password:</Text>
          <Controller
            render={({ field }) => (
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={userDetails.password}
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

export default UpdatePopup;
