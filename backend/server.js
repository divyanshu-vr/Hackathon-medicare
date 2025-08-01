require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true
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

    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: 'Gemini API key is not configured. Please set GEMINI_API_KEY in your .env file.' 
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a medical AI agent. Analyze the potential drug interactions between the following medications: ${medicines.join(', ')}. Provide a brief assessment of whether it's safe to take these drugs together. Keep your response under 50 words and focus on safety concerns.`;

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

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for: http://localhost:5173, http://localhost:5174, http://localhost:3000`);
});

