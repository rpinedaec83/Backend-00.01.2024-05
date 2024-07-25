import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getQuotes = async (req, res) => {
  try {
    const apiKey = process.env.QUOTES_API_KEY;
    const data = await fetchData(`${config.QUOTES_API_URL}/qod`, {}, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes', error });
  }
};
