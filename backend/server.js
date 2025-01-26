require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5174'
}));
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Medicine Interaction Route
app.post('/api/check-medicine-interaction', async (req, res) => {
  try {
    const { medicines } = req.body;

    if (!medicines || medicines.length < 2) {
      return res.status(400).json({ 
        error: 'At least two medicines are required' 
      });
    }
    console.log('Gemini API Key:', process.env.GEMINI_API_KEY);


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    
    const prompt = `You are an medical AI agent.Respond the reaction between the drugs.Tell weather it is safe to take drug together.Result should not be more than 50 words.The medicine list is: ${medicines.join(', ')}.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ interaction: text });
  } catch (error) {
    console.error('Interaction check error:', error);
    res.status(500).json({ 
      error: 'Failed to check medicine interaction',
      details: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

