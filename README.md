🚀 AI Interview Report Generator

An AI-powered full-stack web application that analyzes a candidate's resume, self-description, and job description to generate a detailed interview report.

---

✨ Features

- 📄 Upload Resume (PDF)
- 🧠 AI-generated interview report
- 💬 Technical & Behavioral Questions
- 📊 Skill Gap Analysis
- 📅 Preparation Plan Suggestions
- 🔐 Authentication (JWT-based)
- 🌐 Full-stack architecture (Frontend + Backend)

---

🛠️ Tech Stack

Frontend

- React (Vite)
- Axios
- Tailwind CSS (optional)

Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file upload)
- JWT Authentication
- pdf-parse (resume parsing)

AI

- Google Gemini API (or placeholder AI service)

---

📂 Project Structure

Backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── models/
│   ├── config/
│   ├── app.js
│   └── server.js
│
Frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── App.jsx

---

⚙️ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

---

2️⃣ Backend Setup

cd Backend
npm install

Create a ".env" file:

PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_GENAI_API_KEY=your_api_key

Run backend:

npm run dev

---

3️⃣ Frontend Setup

cd Frontend
npm install
npm run dev

---

📡 API Endpoints

🔐 Auth

- "POST /api/auth/register"
- "POST /api/auth/login"
- "GET /api/auth/get-me"

---

🤖 Interview

- "POST /api/interview"
  - Upload resume (PDF)
  - Send:
    - "selfDescription"
    - "jobDescription"

---

📸 How It Works

1. User logs in
2. Uploads resume (PDF)
3. Adds self description & job description
4. Backend parses resume
5. AI generates interview report
6. Result is returned and displayed

---

⚠️ Common Issues

- ❌ "Missing fields"
  → Ensure keys are:
  
  selfDescription
jobDescription

- ❌ PDF parsing error
  → Use:
  
  npm install pdf-parse@1.1.1

- ❌ 401 Unauthorized
  → Check cookies & JWT

---

🚀 Future Improvements

- 📊 Better UI for report visualization
- 📥 Download report as PDF
- 🧠 Improved AI prompts
- 📈 User dashboard with history
- 🌍 Deployment (Vercel + Render)

---

🤝 Contributing

Pull requests are welcome!
Feel free to open issues for suggestions or improvements.

---

📜 License

This project is open-source and available under the MIT License.

---

💡 Author

Kaveri Meshram

- 💻 Full-stack developer in progress
- 🚀 Building in public
- 🔗 Connect on LinkedIn / Twitter

---

⭐ Support

If you like this project:

👉 Star ⭐ the repo
👉 Share with others
👉 Build something amazing 🚀

---
