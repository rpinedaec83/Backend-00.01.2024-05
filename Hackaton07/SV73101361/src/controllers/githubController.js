import axios from 'axios';
import config from '../utils/config.js';

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`${config.GITHUB_API_URL}/users/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching GitHub user', error });
  }
};
