import OpenAI from 'openai';
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

async function callChatGPT(prompt) {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o-mini-2024-07-18',//prove versiones pero sale lo mismo
  });
  // console.log(chatCompletion);
  console.log(chatCompletion.choices[0].message?.content);
}
export default callChatGPT;