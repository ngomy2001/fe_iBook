import axios from 'axios';
const getCategories = async () => {
  const URL = 'http://localhost:3001/api/category';
  const categories = await axios.get(URL);
  console.log(categories);
  return categories;
};

export default getCategories;
