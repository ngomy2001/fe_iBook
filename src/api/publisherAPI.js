import axios from 'axios';

const getPublishers = async () => {
  try {
    const URL = 'http://localhost:3001/api/publisher';
    const publishers = await axios.get(URL);
    console.log(publishers);
    return publishers;
  } catch (error) {
    console.log(
      '🚀 ~ file: publisherAPI.js ~ line 10 ~ getPublishers ~ error',
      error
    );
  }
};

const createPublisher = async (name, description) => {
  try {
    const payload = { name, description };
    const URL = 'http://localhost:3001/api/publisher/createPublisher';
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
    const URL = `http://localhost:3001/api/publisher/${id}`;
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
    const URL = `http://localhost:3001/api/publisher/${id}`;
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
export { getPublishers, createPublisher, updatePublisher, deletePublisher };
