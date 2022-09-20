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

export { getAuthors };
