import axios from 'axios';

const callChatGPT = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // Puedes usar 'gpt-3.5-turbo' si lo prefieres
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Tu clave API de OpenAI
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling ChatGPT API:", error.response ? error.response.data : error.message);
    return "Error al comunicarse con OpenAI";
  }
};

export default callChatGPT;
