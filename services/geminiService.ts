import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Eva", the AI Assistant for Flexo, a premier tech company specializing in:
1. Web Development (React, Modern Frameworks)
2. Mobile App Development (iOS, Android)
3. UI/UX Design
4. Custom Software Development
5. Cybersecurity
6. 24/7 Support

Your goal is to be helpful, professional, and inviting. 
- Keep answers concise (under 50 words usually).
- Encourage users to fill out the contact form for specific quotes.
- Use a friendly, tech-savvy tone.
- If asked about pricing, say it depends on the project scope and suggest booking a consultation.
`;

const getChatSession = () => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
    return result.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later or use the contact form.";
  }
};