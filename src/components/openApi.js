// pages/api/chat.js (for Next.js) or equivalent API route file
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: ""
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    });

    return res.status(200).json({
      message: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({
      message: 'An error occurred while processing your request'
    });
  }
}