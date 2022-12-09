import axios from 'axios';

const getPublishers = async () => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/publisher`;
    const publishers = await axios.get(URL);
    return publishers.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 10 ~ getPublishers ~ error',
      error
    );
  }
};

const searchPublishers = async (keyword) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/publisher/searchPublisher/${keyword}`;
    const publishers = await axios.get(URL);
    return publishers.data;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 22 ~ searchPublishers ~ error',
      error
    );
  }
};

const createPublisher = async (name, description) => {
  try {
    const payload = { name, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/publisher/createPublisher`;
    const response = await axios.post(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 25 ~ createPublisher ~ error',
      error
    );
  }
};

const updatePublisher = async (id, name, description) => {
  try {
    const payload = { name, description };
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/publisher/${id}`;
    const response = await axios.put(URL, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 40 ~ updatePublisher ~ error',
      error
    );
  }
};

const deletePublisher = async (id) => {
  try {
    const URL = `${process.env.REACT_APP_LOCALHOST}/api/publisher/${id}`;
    const response = await axios.delete(URL, id);
    console.log(response);
    return response;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 54 ~ deletePublisher ~ error',
      JSON.stringify(error)
    );
  }
};
export {
  getPublishers,
  createPublisher,
  updatePublisher,
  deletePublisher,
  searchPublishers,
};
