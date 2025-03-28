/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import dotenv from "dotenv";
dotenv.config();

interface OpenRouterResponse {
    choices: {
        message: {
            role: string;
            content: string;
        };
    }[];
}
const REQUIRED_ENV_VARS = {
    API_KEY: process.env.API_KEY,
    API_IA: process.env.API_IA,
    TITLE: process.env.TITLE,
    REFERER: process.env.HTTP_REFERER,
};

const missingVars = Object.entries(REQUIRED_ENV_VARS)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

if (missingVars.length > 0) {
    throw new Error(`The following environment variables are missing: ${missingVars.join(", ")}`);
}

export const { API_KEY, API_IA, TITLE, REFERER } = REQUIRED_ENV_VARS;

async function translatePost(message: any, language: string): Promise<string> {
    try {
        const response = await fetch(`${API_IA}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "HTTP-Referer": `${REFERER}`,
                "X-Title": `${TITLE}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                        role: "user",
                        content: `Translate the following JSON object into ${language} while maintaining the exact JSON structure. Provide only the translated JSON code without additional explanations or text:\n${JSON.stringify(message)}`
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data: OpenRouterResponse = await response.json();
        return data.choices[0].message.content || "Error: Empty response";
    } catch (error) {
        console.error("Request error:", error);
        return `Request error: ${error}`;
        
        
    }
}

export async function iaPrompt(message: any): Promise<string> {
    return translatePost(message.text, message.targetLang);
}
