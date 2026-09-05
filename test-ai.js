require("dotenv").config();

const { generateContent } = require('./src/services/ai.service');

async function test() {
    const result = await generateContent(
        "Jamia Millia Islamia is organizing a technology hackathon for students.",
        "LinkedIn post"
    );

    console.log(result);
}

test();