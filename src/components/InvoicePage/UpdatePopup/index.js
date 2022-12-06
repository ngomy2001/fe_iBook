import React from 'react';

import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import { Modal, Button, Text } from '@nextui-org/react';

import { updateInvoiceStatus } from '../../../api/invoiceAPI';

const UpdatePopup = ({
  visible,
  closeModal,
  invoiceId,
  invoiceDetails,
  onCreate,
}) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updateInvoiceStatus(invoiceId, data.status.value);
      onCreate();
      closeModal(false);
      return response;
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 28 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal
      scroll
      preventClose
      aria-labelledby="modal-title"
      open={visible}
      width="600px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Update author
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text h6>Status:</Text>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                placeholder={invoiceDetails}
                options={[
                  { value: 'Waiting', label: 'Waiting' },
                  { value: 'Delivered', label: 'Delivered' },
                  { value: 'Completed', label: 'Completed' },
                  { value: 'Canceled', label: 'Canceled' },
                ]}
              />
            )}
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
