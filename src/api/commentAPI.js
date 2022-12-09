import axios from 'axios';

const getComments = async (bookId) => {
  try {
    const URL = `http://localhost:3001/api/comment/${bookId}`;
    const comments = await axios.get(URL);
    return comments.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: commentAPI.js ~ line 9 ~ getComments ~ error',
      error
    );
  }
};

const createComment = async (userId, bookId, content) => {
  try {
    const payload = {
      userId,
      bookId,
      content,
    };
    const URL = 'http://localhost:3001/api/comment/addComment';
    const response = await axios.post(URL, payload);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: commentAPI.js ~ line 27 ~ createComment ~ error',
      JSON.stringify(error)
    );
  }
};

export { getComments, createComment };