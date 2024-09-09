const Message = require('../models/Message');

// Enviar un mensaje
const sendMessageService = async (messageData) => {
  try {
    const message = await Message.create(messageData);
    return message;
  } catch (error) {
    throw new Error('Error al enviar el mensaje: ' + error.message);
  }
};

// Obtener mensajes de un paquete
const getMessagesService = async (packageId) => {
  try {
    const messages = await Message.findAll({ where: { packageId } });
    return messages;
  } catch (error) {
    throw new Error('Error al obtener los mensajes: ' + error.message);
  }
};

module.exports = { sendMessageService, getMessagesService };
