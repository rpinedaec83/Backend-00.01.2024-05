import Message from '../entity/index.js';

export const createMessage = async (req, res) => {
  const { content, sender, packageId } = req.body;
  try {
    const newMessage = await Message.create({ content, sender, packageId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessagesByPackage = async (req, res) => {
  try {
    const messages = await Message.findAll({ where: { packageId: req.params.packageId } });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
