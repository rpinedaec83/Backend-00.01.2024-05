const Message = require('../models/message');
const User = require('../models/user');

exports.createMessage = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const message = new Message({ content, user: userId });
    await message.save();

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('user', 'username');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const message = await Message.findByIdAndUpdate(id, { content, edited: true }, { new: true });
    if (!message) return res.status(404).json({ error: 'Mensaje no encontrado' });

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Message.findByIdAndDelete(id);
    if (!message) return res.status(404).json({ error: 'Mensaje no encontrado' });

    res.status(200).json({ message: 'Mensaje eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.clearHistory = async (req, res) => {
  try {
    await Message.deleteMany({});
    res.status(200).json({ message: 'Historial de chat eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Detección de palabras clave y respuesta del bot
exports.createMessage = async (req, res) => {
    try {
      const { content, userId } = req.body;
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      const message = new Message({ content, user: userId });
      await message.save();
  
      // Verificar si el mensaje contiene una palabra clave para el bot
      if (content.includes('ayuda')) {
        const botMessage = new Message({
          content: '¡Hola! ¿Cómo puedo asistirte?',
          user: null, // El bot no tiene un ID de usuario
        });
        await botMessage.save();
      }
  
      res.status(201).json(message);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
