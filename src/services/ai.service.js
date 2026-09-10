const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
     apiKey: process.env.GEMINI_API_KEY
});

async function generateContent(content, outputType , audience , tone , language , detailLevel , objective , image) {
     const prompt = `You are an AI content transformation engine.
     
     Convert the following source content into a ${outputType}.
     
     Target Audience: ${audience}
     Tone: ${tone}
     Language: ${language}
     Detail Level: ${detailLevel}
     Communication objective: ${objective} 
     
     Source content: ${content}`;


     const contents = image ? [
          {
               inlineData: {
                    mimetype: image.mimetype,
                    data: image.buffer.toString("base64")
               }
          },
          { text: prompt }
     ]
     : prompt;

     const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents
     });

     return response.text;
}

module.exports = {
     generateContent,
}