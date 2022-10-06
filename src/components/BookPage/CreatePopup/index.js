import React, { useState, useEffect, useMemo } from 'react';

import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import { Modal, Button, Text, Input, Dropdown } from '@nextui-org/react';

import { getBooks, createBook } from '../../../api/bookAPI';

const CreatePopup = ({
  visible,
  closeModal,
  publisher,
  author,
  category,
  onCreate,
}) => {
  // const [book, setBook] = useState([]);
  const [selected, setSelected] = useState(new Set(['']));

  const { control, handleSubmit } = useForm();

  // const getBooksData = async () => {
  //   const books = await getBooks();
  //   setBook(books);
  // };

  const onSubmit = async (data) => {
    console.log('🚀 ~ file: index.js ~ line 44 ~ onSubmit ~ data', data);
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
          <Text h6>Select category:</Text>
          <Controller
            render={({ field }) => (
              <Dropdown>
                <Dropdown.Button flat color="error"></Dropdown.Button>
                <Dropdown.Menu selectionMode="single">
                  {category.data &&
                    category.data.map((row) => (
                      <Dropdown.Item key={row._id}>{row.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
            name="categoryId"
            control={control}
            defaultValue=""
          />

          <Text h6>Select author:</Text>
          <Controller
            render={({ field }) => (
              <Dropdown>
                <Dropdown.Button flat color="error"></Dropdown.Button>
                <Dropdown.Menu selectionMode="single">
                  {author.data &&
                    author.data.map((row) => (
                      <Dropdown.Item key={row._id}>
                        {row.firstName} {row.lastName}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
            name="authorId"
            control={control}
            defaultValue=""
          />

          <Text h6>Select publisher:</Text>
          <Controller
            render={({ field }) => (
              <Dropdown>
                <Dropdown.Button flat color="error"></Dropdown.Button>
                <Dropdown.Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                  // {...field}
                >
                  {publisher.data &&
                    publisher.data.map((row) => (
                      <Dropdown.Item key={row._id}>{row.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
            name="publisherId"
            control={control}
            defaultValue=""
          />

          <Text h6>Select language:</Text>
          <Controller
            render={({ field }) => (
              <Dropdown>
                <Dropdown.Button flat color="error"></Dropdown.Button>
                <Dropdown.Menu selectionMode="single">
                  <Dropdown.Item key="Vietnamese">Vietnamese</Dropdown.Item>
                  <Dropdown.Item key="English">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
            // onClick={() => {
            //   closeModal(false);
            //   getBooksData();
            // }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreatePopup;
