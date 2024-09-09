import Location from '../entity/index.js';

export const addLocation = async (req, res) => {
  const { latitude, longitude, timestamp, packageId } = req.body;
  try {
    const newLocation = await Location.create({ latitude, longitude, timestamp, packageId });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
