import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getPhotos = async (req, res) => {
  try {
    const { query, page = 1, per_page = 10 } = req.query;
    const apiKey = process.env.UNSPLASH_ACCESS_KEY;
    const data = await fetchData(`${config.UNSPLASH_API_URL}/search/photos`, { query, page, per_page, client_id: apiKey });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching photos', error });
  }
};
