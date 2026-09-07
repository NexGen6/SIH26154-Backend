const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
     apiKey: process.env.GEMINI_API_KEY
});

async function generateContent(content, outputType , audience , tone , language , detailLevel , objective) {
     const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `You are an AI content transformation engine.
          Convert the following source content into a ${outputType}.

          Target Audience: ${audience}
          Tone: ${tone}
          Language: ${language}
          Detail Level: ${detailLevel}
          Communication objective: ${objective}
          
          Source content: ${content}`
     });

     return response.text;
}

module.exports = {
     generateContent,
}