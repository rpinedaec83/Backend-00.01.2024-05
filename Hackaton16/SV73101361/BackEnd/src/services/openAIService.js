const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Función para obtener respuesta del chatbot utilizando streaming
exports.getChatbotResponse = async (message) => {
  try {
    const prompt = `El usuario pregunta: "${message}". Proporciona una recomendación de libro basada en esta consulta.`;

    // Iniciar la solicitud de streaming con gpt-4o-mini y max tokens definido
    const stream = await client.chat.completions.create({
      model: 'gpt-4o-mini',  // Asegúrate de que este sea el nombre correcto del modelo
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 250,  // Limitar la respuesta a un máximo de 250 tokens
      stream: true,     // Activar streaming
    });

    // Manejar el flujo de datos en tiempo real
    let responseText = '';
    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || ''); // Imprimir cada fragmento del stream
      responseText += chunk.choices[0]?.delta?.content || ''; // Acumular la respuesta completa
    }

    return responseText.trim(); // Devolver la respuesta final
  } catch (error) {
    console.error('Error al obtener respuesta de OpenAI:', error);
    throw new Error('No se pudo obtener una respuesta del chatbot.');
  }
};
