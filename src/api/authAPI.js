import axios from 'axios';
const login = async (payload) => {
  console.log('🚀 ~ file: authAPI.js ~ line 3 ~ login ~ payload', payload);
  try {
    const URL = 'http://localhost:3001/api/auth/login';
    const response = await axios.post(URL, payload);
    console.log('🚀 ~ file: authAPI.js ~ line 7 ~ login ~ response', response);

    return response;
  } catch (error) {
    console.log('🚀 ~ file: authAPI.js ~ line 10 ~ login ~ error', error);
  }
};

export { login };
