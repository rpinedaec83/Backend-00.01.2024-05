import { fetchData } from '../services/apiService.js';
import config from '../utils/config.js';

export const getPokemonList = async (req, res) => {
  try {
    const data = await fetchData(`${config.POKEAPI_URL}/pokemon`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokemon list', error });
  }
};

export const getPokemonDetails = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await fetchData(`${config.POKEAPI_URL}/pokemon/${name}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokemon details', error });
  }
};
