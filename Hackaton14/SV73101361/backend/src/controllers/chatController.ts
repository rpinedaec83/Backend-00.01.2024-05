import { Request, Response } from 'express';
import Message from '../models/messageModel';
import { streamChatResponse } from '../services/openaiService';

// Obtener todos los mensajes almacenados en la base de datos
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.findAll();  // Consulta para obtener todos los mensajes
    res.json(messages);  // Devuelve los mensajes en formato JSON
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages' });  // Maneja errores en la consulta
  }
};

// Crear un nuevo mensaje y obtener la respuesta del bot
export const createMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });  // Validación del contenido del mensaje
  }

  try {
    // Guardar el mensaje del usuario en la base de datos
    await Message.create({ content, sender: 'user' });

    // Obtener la respuesta del bot mediante la API de OpenAI
    const stream = await streamChatResponse(content);
    let accumulatedText = '';

    // Procesar el stream para acumular la respuesta del bot
    for await (const chunk of stream) {
      accumulatedText += chunk.choices[0]?.delta?.content || '';
    }

    // Guardar la respuesta del bot en la base de datos
    const botMessage = await Message.create({ content: accumulatedText, sender: 'bot' });

    // Enviar la respuesta completa al cliente
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(botMessage.content);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });  // Maneja errores al crear el mensaje
  }
};

// Eliminar todos los mensajes de la base de datos
export const deleteMessages = async (req: Request, res: Response) => {
  try {
    await Message.destroy({ where: {}, truncate: true });  // Elimina todos los registros de la tabla de mensajes
    res.send('All messages deleted');
  } catch (error) {
    console.error('Error deleting messages:', error);
    res.status(500).json({ error: 'Failed to delete messages' });  // Maneja errores al eliminar los mensajes
  }
};
