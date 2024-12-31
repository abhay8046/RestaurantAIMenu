const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = 5001; // Change the port if needed

app.use(cors()); // Allow Cross-Origin Requests
app.use(bodyParser.json()); // Parse JSON requests

const openai = new OpenAI({
  apiKey: "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"// Use environment variable for API key
});

// Endpoint to handle chat requests
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    res.status(200).json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});




// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const OpenAI = require('openai');
// require('dotenv').config();

// const app = express();
// const PORT = 5001;

// app.use(cors());
// app.use(bodyParser.json());


// const openai = new OpenAI({
//  apiKey: "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"
// });

// app.post('/api/chat', async (req, res) => {
//   try {
//     const { messages } = req.body;

//     const completion = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: messages,
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     res.status(200).json({ message: completion.choices[0].message.content });
//   } catch (error) {
//     console.error('OpenAI API error:', error);
//     res.status(500).json({ message: 'An error occurred while processing your request' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });
