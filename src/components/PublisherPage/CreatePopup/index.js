import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getPublishers, createPublisher } from '../../../api/publisherAPI';

const CreatePopup = ({ visible, closeModal }) => {
  const [publisher, setPublisher] = useState([]);

  const { control, handleSubmit } = useForm();

  const getPublisherData = async () => {
    const publishers = await getPublishers();
    setPublisher(publishers);
  };

  const onSubmit = async (data) => {
    try {
      const response = await createPublisher(data.name, data.description);
      console.log(response);
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 24 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Add new publisher
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
                placeholder="Enter the publisher name"
                {...field}
              />
            )}
            name="name"
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
              getPublisherData();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreatePopup;
