import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getQuotes = async (req, res) => {
  try {
    const data = await fetchData(`${config.QUOTES_API_URL}/qod`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes', error });
  }
};
