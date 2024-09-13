const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.getChatbotResponse = async (message) => {
  try {
    const prompt = `El usuario pregunta: "${message}". Proporciona una recomendación de libro basada en esta consulta.`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error al obtener respuesta de OpenAI:', error);
    throw new Error('No se pudo obtener una respuesta del chatbot.');
  }
};
