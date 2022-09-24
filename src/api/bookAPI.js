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

export { getBooks, createBook };
