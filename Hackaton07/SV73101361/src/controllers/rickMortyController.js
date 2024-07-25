import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getCharacters = async (req, res) => {
  try {
    const data = await fetchData(`${config.RICKMORTY_API_URL}/character`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching characters', error });
  }
};

export const getCharacterDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchData(`${config.RICKMORTY_API_URL}/character/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching character details', error });
  }
};
