import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getTopMovies = async (req, res) => {
  try {
    const apiKey = process.env.MOVIEDB_API_KEY;
    const data = await fetchData(`${config.MOVIEDB_API_URL}/movie/top_rated`, { api_key: apiKey });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top movies', error });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const apiKey = process.env.MOVIEDB_API_KEY;
    const data = await fetchData(`${config.MOVIEDB_API_URL}/movie/${id}`, { api_key: apiKey });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie details', error });
  }
};
