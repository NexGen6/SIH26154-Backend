const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
     apiKey: process.env.GEMINI_API_KEY
});

async function generateContent(content, outputType) {
     const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `You are an AI content transformation engine.
          Convert the following source content into a ${outputType}.
          
          Source content: ${content}`
     });

     return response.text;
}

module.exports = {
     generateContent,
}