import axios from 'axios';

const updateBookCopy = async (bookCopyId, status) => {
  try {
    console.log(
      '🚀 ~ file: bookCopyAPI.js ~ line 4 ~ updateBookCopy ~ bookCopyId',
      bookCopyId
    );
    const data = { status };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/bookCopy/${bookCopyId}`;

    const updateBookCopy = await axios.put(URL, data);
  } catch (error) {
    console.log(
      '🚀 ~ file: bookCopyAPI.js ~ line 14 ~ updateBookCopy ~ error',
      error
    );
  }
};
export { updateBookCopy };
