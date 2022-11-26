import React, { useState, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { uploadBookSample } from '../../../api/bookAPI';
import { firebaseStorage, getTokenSample } from '../../../api/firebase';
import { uploadBytes, ref } from 'firebase/storage';
import { Modal, Button, Text, Input } from '@nextui-org/react';

const UploadPopup = ({ visible, closeModal, bookId, onCreate }) => {
  const { control, handleSubmit } = useForm();
  const [sampleData, setSampleData] = useState();
  const handleUploadSample = (event) => {
    const urlSample = event.target.files[0];
    // console.log('vv', urlSample);
    setSampleData(urlSample);
  };
  const onSubmit = async (data) => {
    try {
      const sampleName = sampleData.name;
      console.log('name', sampleName);
      const uploadFirebase = ref(firebaseStorage, `bookSamples/${sampleName}`);
      await uploadBytes(uploadFirebase, sampleData);
      const sampleDetails = await getTokenSample(sampleName);
      const tokenSample = sampleDetails.downloadTokens;
      console.log(
        '🚀 ~ file: index.js ~ line 25 ~ onSubmit ~ tokenSample',
        tokenSample
      );
      const sample =
        process.env.REACT_APP_HTTPS_ADDRESS +
        sampleName +
        process.env.REACT_APP_TOKEN +
        tokenSample;

      console.log(sample);
      const response = await uploadBookSample(bookId, sample);
      onCreate();
      closeModal(false);
      return response;
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 32 ~ onSubmit ~ error', error);
    }
  };

  return (
    <Modal preventClose aria-labelledby="modal-title" open={visible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Upload Book Sample
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text h6>URL:</Text>
          <input type="file" onChange={handleUploadSample}></input>
          {/* <Controller
            render={({ field }) => (
              <Input
                clearable
                fullWidth
                color="primary"
                size="lg"
                type="file"
                onChange={(event) => handleUploadSample(event)}
                {...field}
              />
            )}
            name="sample"
            control={control}
            defaultValue=""
          /> */}
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

export default UploadPopup;
