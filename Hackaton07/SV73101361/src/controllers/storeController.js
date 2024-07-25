import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getProducts = async (req, res) => {
  try {
    const data = await fetchData(`${config.FAKESTORE_API_URL}/products`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};
