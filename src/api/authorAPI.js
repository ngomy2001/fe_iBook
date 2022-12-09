import axios from 'axios';

const getAuthors = async () => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/author`;
    const authors = await axios.get(URL);
    console.log(authors);
    return authors.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 10 ~ getAuthors ~ error',
      JSON.stringify(error)
    );
  }
};

const searchAuthors = async (keyword) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/author/searchAuthor/${keyword}`;
    const authors = await axios.get(URL);
    return authors.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 23 ~ searchAuthors ~ error',
      error
    );
  }
};

const createAuthor = async (firstName, lastName, description) => {
  try {
    const payload = { firstName, lastName, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/author/createAuthor`;
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 25 ~ createAuthor ~ error',
      error
    );
  }
};

const updateAuthor = async (id, firstName, lastName, description) => {
  try {
    const payload = { firstName, lastName, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/author/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 40 ~ updateAuthor ~ error',
      error
    );
  }
};

const deleteAuthor = async (id) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/author/${id}`;
    const response = await axios.delete(URL, id);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 54 ~ deleteAuthor ~ error',
      error
    );
  }
};
export { getAuthors, createAuthor, updateAuthor, deleteAuthor, searchAuthors };
