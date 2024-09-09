const Message = require('../models/Message');

// Enviar un mensaje en el chat relacionado con un paquete
const sendMessage = async (req, res) => {
  const { content, packageId } = req.body;
  try {
    const message = await Message.create({
      content,
      packageId,
      userId: req.user.id,
    });
    res.status(201).json({ success: true, message });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al enviar el mensaje', error });
  }
};

// Obtener los mensajes de un paquete
const getMessages = async (req, res) => {
  const { packageId } = req.params;
  try {
    const messages = await Message.findAll({ where: { packageId } });
    if (!messages.length) {
      return res.status(404).json({ success: false, message: 'No se encontraron mensajes para este paquete' });
    }
    res.json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los mensajes', error });
  }
};

module.exports = { sendMessage, getMessages };
