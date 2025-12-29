
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY! });
  }

  async getArtistConciergeResponse(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: "You are the C9 Entertainment Digital Concierge. Your tone is sophisticated, elegant, and helpful. You know everything about C9 artists: Younha, Lee Seok Hoon, CIX, EPEX, and NAZE. Answer concisely and encourage the user to explore their music.",
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, our digital systems are currently experiencing a high volume of requests. How can I assist you with C9 Entertainment today?";
    }
  }
}

export const geminiService = new GeminiService();
