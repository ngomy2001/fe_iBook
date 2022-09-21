import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Modal, Button, Text, Input } from '@nextui-org/react';

import { getBooks, createBook } from '../../../api/bookAPI';

const CreatePopup = ({ visible, closeModal }) => {
  const [book, setBook] = useState([]);

  const { control, handleSubmit } = useForm();

  const getBooksData = async () => {
    const books = await getBooks();
    setBook(books);
  };

  const onSubmit = async (data) => {
    try {
      const response = await createBook(
        data.title,
        data.categoryId,
        data.authorId,
        data.publisherId,
        data.language,
        data.numberOfPages,
        data.numberOfCopies
      );
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
            Add new book
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
                placeholder="Enter the book title"
                {...field}
              />
            )}
            name="title"
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
                placeholder="Enter the book category"
                {...field}
              />
            )}
            name="categoryId"
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
                placeholder="Enter the book author"
                {...field}
              />
            )}
            name="authorId"
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
                placeholder="Enter the book publisher"
                {...field}
              />
            )}
            name="publisherId"
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
                placeholder="Enter the book publisher"
                {...field}
              />
            )}
            name="publisherId"
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
                placeholder="Enter the book langue"
                {...field}
              />
            )}
            name="language"
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
                placeholder="Enter the book langue"
                {...field}
              />
            )}
            name="language"
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
                placeholder="Enter the number of pages"
                {...field}
              />
            )}
            name="numberOfPages"
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
                placeholder="Enter the number of copies"
                {...field}
              />
            )}
            name="numberOfCopies"
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
              getBooksData();
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
