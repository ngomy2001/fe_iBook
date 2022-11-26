import React, { useState, useEffect } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useForm } from 'react-hook-form';
import { Modal, Button, Text, Image } from '@nextui-org/react';

const ReadSamplePopup = ({ visible, closeModal, sample }) => {
  const { bindings } = useForm();
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  return (
    <Modal
      noPadding
      scroll
      fullScreen
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}
      open={visible}
    >
      <Modal.Header>
        <Text id="modal-title" b size={18}></Text>
      </Modal.Header>
      <Modal.Body>
        <Image src={sample}></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => closeModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReadSamplePopup;
