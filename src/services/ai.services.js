const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

// ✅ INIT AI
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

// ✅ SCHEMA
const interviewReportSchema = z.object({
  technicalQuestions: z.array(
    z.object({
      question: z.string("The technical question asked during the interview"),
      intention: z.string("The intention behind asking the question"),
      answer: z.string("How to answer the question effectively, including key points to cover and common pitfalls to avoid"),
    })
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string("The behavioral question asked during the interview"),
      intention: z.string("The intention behind asking the question"),
      answer: z.string("How to answer the question effectively, including key points to cover and common pitfalls to avoid"),
    })
  ),

  skillsGaps: z.array(
    z.object({
      skill: z.string("The specific skill or knowledge area where the candidate has a gap"),
      severity: z.enum(["Low", "Medium", "High"]),
      description: z.string("List of specific examples or scenarios where the skill gap was evident during the interview, along with an explanation of how it affected the candidate's ability to answer questions or solve problems effectively"),
      preparationPlan: z.array(
        z.object({
          day: z.string("The specific day or time frame for the preparation plan"),
          activities: z.array(z.string("A list of specific activities, resources, or exercises that the candidate should undertake to address the skill gap, along with an explanation of how each activity will help improve the candidate's proficiency in that area")),
        })
      ),
    })
  ),

  summary: z.string(),
});

// ✅ MAIN FUNCTION
async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  try {
    const response = await ai.models.generateContent({
      // ✅ FIX 1: correct model
      model: "gemini-3-flash-preview",

      // ✅ FIX 2: correct content format
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are an expert interviewer AI.

Analyze candidate:

Resume: ${resume}
Self Description: ${selfDescription}
Job Description: ${jobDescription}

Return ONLY valid JSON. No explanation.
              `,
            },
          ],
        },
      ],

      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(interviewReportSchema),
      },
    });

    // ✅ FIX 3: safer parsing
    let text =
      response.text ||
      response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No AI response");
    }

    // remove markdown if AI adds ```json
    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("AI ERROR:", error);
    throw error;
  }
}

module.exports = { generateInterviewReport };