import axios from 'axios';

export const fetchData = async (url, params = {}, options = {}) => {
  try {
    const response = await axios.get(url, { params, ...options });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    throw error;
  }
};
