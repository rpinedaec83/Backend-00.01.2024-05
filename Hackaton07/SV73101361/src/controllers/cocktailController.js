import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getTopCocktails = async (req, res) => {
  try {
    const data = await fetchData(`${config.COCKTAILDB_API_URL}/popular.php`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top cocktails', error });
  }
};
