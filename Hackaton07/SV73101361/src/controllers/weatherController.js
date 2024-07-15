import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    const data = await fetchData(`https://api.openweathermap.org/data/2.5/weather`, { q: city, appid: apiKey });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data', error });
  }
};
