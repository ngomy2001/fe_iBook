import axios from 'axios';

const getUsers = async () => {
  try {
    const URL = 'http://localhost:3001/api/accounts';
    const users = await axios.get(URL);
    console.log(users);
    return users.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: userAPI.js ~ line 10 ~ getUsers ~ error',
      JSON.stringify(error)
    );
  }
};
const getMonthlyUsers = async () => {
  try {
    const URL = 'http://localhost:3001/api/accounts/countAccountEachMonth';
    const users = await axios.get(URL);
    return users.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: userAPI.js ~ line 22 ~ getMonthlyUsers ~ error',
      error
    );
  }
};
const searchUsers = async (keyword) => {
  try {
    const URL = `http://localhost:3001/api/accounts/searchAccount/${keyword}`;
    const users = await axios.get(URL);
    console.log(users);
    return users.data;
  } catch (error) {
    console.log('🚀 ~ file: userAPI.js ~ line 24 ~ searchUsers ~ error', error);
  }
};

const createUser = async (firstName, lastName, role, email, password) => {
  try {
    const payload = { firstName, lastName, role, email, password };
    const URL = 'http://localhost:3001/api/accounts/createAccount';
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: userAPI.js ~ line 25 ~ createUser ~ error', error);
  }
};

const updateUser = async (id, firstName, lastName, role, email, password) => {
  try {
    const payload = { firstName, lastName, role, email, password };
    const URL = `http://localhost:3001/api/accounts/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: userAPI.js ~ line 37 ~ updateUser ~ error', error);
  }
};

export { getUsers, createUser, updateUser, searchUsers, getMonthlyUsers };
