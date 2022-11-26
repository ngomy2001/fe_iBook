import axios from 'axios';

const getBooks = async () => {
  try {
    const URL = 'http://localhost:3001/api/book';
    const books = await axios.get(URL);
    return books;
  } catch (error) {
    console.log('🚀 ~ file: bookAPI.js ~ line 9 ~ getBooks ~ error', error);
  }
};

const findBook = async (id) => {
  try {
    const URL = `http://localhost:3001/api/book/${id}`;
    const book = await axios.get(URL);
    return book.data;
  } catch (error) {
    console.log('🚀 ~ file: bookAPI.js ~ line 9 ~ getBooks ~ error', error);
  }
};

const createBook = async (
  title,
  categoryId,
  authorId,
  publisherId,
  language,
  numberOfPages,
  numberOfCopies
) => {
  try {
    const payload = {
      title,
      categoryId,
      authorId,
      publisherId,
      language,
      numberOfPages,
      numberOfCopies,
    };
    const URL = 'http://localhost:3001/api/book/createBook';
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: bookAPI.js ~ line 36 ~ error', error);
  }
};

const updateBook = async (
  id,
  title,
  categoryId,
  authorId,
  publisherId,
  language,
  numberOfPages,
  numberOfCopies
) => {
  try {
    const payload = {
      title,
      categoryId,
      authorId,
      publisherId,
      language,
      numberOfPages,
      numberOfCopies,
    };
    const URL = `http://localhost:3001/api/book/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: bookAPI.js ~ line 65 ~ error', error);
  }
};

const uploadBookSample = async (id, sample) => {
  try {
    const data = { sample };
    const URL = `http://localhost:3001/api/book/sample/${id}`;
    const response = await axios.put(URL, data);
    console.log(response);
  } catch (error) {
    console.log(
      '🚀 ~ file: bookAPI.js ~ line 75 ~ uploadBookSample ~ error',
      error
    );
  }
};
const deleteBook = async (id) => {
  try {
    const URL = `http://localhost:3001/api/book/${id}`;
    const response = await axios.delete(URL, id);
    console.log(response);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: bookAPI.js ~ line 76 ~ deleteBook ~ error', error);
  }
};

const getBookCopyAvailable = async (bookId) => {
  try {
    const URL = `http://localhost:3001/api/bookCopy/search/${bookId}`;
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: bookAPI.js ~ line 86 ~ getBookCopyAvailable ~ error',
      error
    );
  }
};
export {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getBookCopyAvailable,
  uploadBookSample,
  findBook,
};
