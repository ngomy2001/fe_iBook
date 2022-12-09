import axios from 'axios';
const getCategories = async () => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/category`;
    const categories = await axios.get(URL);
    console.log(categories);
    return categories.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryAPI.js ~ line 9 ~ getCategories ~ error',
      error
    );
  }
};
const searchCategories = async (keyword) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/category/searchCategory/${keyword}`;
    const categories = await axios.get(URL);
    return categories.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryAPI.js ~ line 21 ~ searchCategories ~ error',
      error
    );
  }
};
const createCategory = async (name, description) => {
  try {
    const payload = { name, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/category/createCategory`;
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryAPI.js ~ line 14 ~ createCategory ~ error',
      JSON.stringify(error)
    );
  }
};

const updateCategory = async (id, name, description) => {
  try {
    const payload = { name, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/category/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryAPI.js ~ line 33 ~ updateCategory ~ error',
      error
    );
  }
};

const deleteCategory = async (id) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/category/${id}`;
    const response = await axios.delete(URL, id);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: categoryAPI.js ~ line 53 ~ deleteCategory ~ error',
      JSON.stringify(error)
    );
  }
};
export {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  searchCategories,
};
