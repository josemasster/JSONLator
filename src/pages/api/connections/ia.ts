import OpenAI from "openai";
import { env } from "process";

const openai = new OpenAI({
    baseURL: process.env.baseURL,
    apiKey: process.env.apiKey
});

async function mainPrompt() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "deepseek-chat",
    });
  
    console.log(completion.choices[0].message.content);
  }
  
  export default mainPrompt();