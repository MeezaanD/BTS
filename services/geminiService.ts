
import { GoogleGenAI } from "@google/genai";
import { Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDailyEncouragement = async () => {
	try {
		const response = await ai.models.generateContent({
			model: "gemini-3-flash-preview",
			contents: "Generate a short, heartfelt encouragement message for BTS fans (ARMY) waiting for their 2026 reunion. Mention themes of patience, eternity, and 'Apobangpo'. Make it poetic.",
			config: {
				responseMimeType: "application/json",
				responseSchema: {
					type: Type.OBJECT,
					properties: {
						text: { type: Type.STRING },
						author: { type: Type.STRING }
					},
					required: ["text", "author"]
				}
			}
		});

		return JSON.parse(response.text);
	} catch (error) {
		console.error("Failed to fetch message from Gemini:", error);
		return {
			text: "The stars shine brightest in the darkest nights. We will wait under this purple sky until we meet again.",
			author: "ARMY Heart"
		};
	}
};
