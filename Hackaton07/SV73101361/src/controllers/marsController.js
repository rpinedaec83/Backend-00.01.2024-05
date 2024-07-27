import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getMarsPhotos = async (req, res) => {
  try {
    const { sol, camera, page = 1 } = req.query;
    const apiKey = process.env.NASA_API_KEY;
    const data = await fetchData(`${config.NASA_API_URL}/mars-photos/api/v1/rovers/curiosity/photos`, { sol, camera, page, api_key: apiKey });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Mars photos', error });
  }
};
