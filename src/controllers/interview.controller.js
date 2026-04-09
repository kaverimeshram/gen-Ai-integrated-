const pdfParse = require("pdf-parse");
const { generateInterviewReport } = require("../services/ai.services");

async function generateInterViewReportController(req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Resume file required" });
    }

    const parser = pdfParse.default || pdfParse;

    const data = await parser(req.file.buffer);
    const resumeContent = data.text;

    const { selfDescription, jobDescription } = req.body;

    if (!selfDescription || !jobDescription) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const result = await generateInterviewReport({
      resume: resumeContent,
      selfDescription,
      jobDescription,
    });

    res.status(201).json({
      message: "Interview report generated successfully",
      result,
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
}

module.exports = {
  generateInterViewReportController,
};