import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getRandomUser = async (req, res) => {
  try {
    const data = await fetchData(`${config.RANDOMUSER_API_URL}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random user', error });
  }
};
