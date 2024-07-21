import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getExchangeRate = async (req, res) => {
  try {
    const data = await fetchData(`${config.FRANKFURTER_API_URL}/latest`, { from: 'USD', to: 'PEN' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exchange rate', error });
  }
};
