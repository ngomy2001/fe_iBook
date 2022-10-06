import axios from 'axios';

const getAuthors = async () => {
  try {
    const URL = 'http://localhost:3001/api/author';
    const authors = await axios.get(URL);
    console.log(authors);
    return authors;
  } catch (error) {
    console.log(
      '🚀 ~ file: authorAPI.js ~ line 10 ~ getAuthors ~ error',
      JSON.stringify(error)
    );
  }
};

const createAuthor = async (firstName, lastName, description) => {
  try {
    const payload = { firstName, lastName, description };
    const URL = 'http://localhost:3001/api/author/createAuthor';
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
    const URL = `http://localhost:3001/api/author/${id}`;
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
    const URL = `http://localhost:3001/api/author/${id}`;
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
export { getAuthors, createAuthor, updateAuthor, deleteAuthor };
