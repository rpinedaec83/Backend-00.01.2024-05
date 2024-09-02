import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const streamChatResponse = async (message: string) => {
  const stream = await client.chat.completions.create({
    model: 'gpt-4o-mini',  // o 'gpt-4-mini' si es tu caso
    messages: [{ role: 'user', content: message }],
    stream: true,
  });

  return stream;
};
