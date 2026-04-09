const mongoose = require('mongoose');



const preparationPlanSchema = new mongoose.Schema({
     day: {
          type: Number,
          required: [true, "Day is required"]
     },
     focus: {
          type: String,
          required: [true, "Focus is required"]
     },
     tasks: [{
          type: String,
          required: [true, "At least one task is required"]
     }]
}, {
     _id: false
})


const skillGapSchema = new mongoose.Schema ({
        skill: {
          type: String,
          required: [true, "Skill is required"]
        },
        severity: {
          type: String,
          enum: ["low", "medium", "high"],
          required: [true, "Severity is required"]
        }
}, {
     _id: false
})


const technialQuestionSchema =  new mongoose.Schema({
      question: {
          type: String,
          required: [true, "technical question is required"]
      },

        intention: {
          type: String,
          required: [true, "intention is required"]
        },
        answer: {
          type: String,
          required: [true, "Answer is required"]
        }
}, {
     _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
          question: {
               type: String,
               required: [true, "behavioral question is required"]
          },
          intention: {
               type: String,
               required: [true, "intention is required"]
          },
          answer: {
               type: String,
               required: [true, "Answer is required"]
          }
     }, {
          _id: false
     }
)

const interviewReoprtSchema =  new mongoose.Schema({
     jobDescription : {
          type: String,
          required: [true, "job description is required"]
     },
     resume: {
          type: String,
          required: [true, "resume text is required"]
     },

     selfDescription: {
          type: String,
     },
     matchScore: {
          type: Number,
          min: 0,
          max: 100,
     },
     technicalQuestins:  [technialQuestionSchema],
     behavioralQuestions: [behavioralQuestionSchema],
     skillGaps: [skillGapSchema],
     preparationPlan: [preparationPlanSchema],
}, 
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {
     timestamps: true
})

const interviewReportModel = mongoose.model("interviewReoprt", interviewReoprtSchema);

module.exports = interviewReportModel;





/**
 * - job description schema : String
 * - resume text: String
 * Self description : String
 * 
 * - matchScore: Number
 * 
 * Technical question : 
 * [{
 *               question : "",
 *              intention : "",
 *              answer : "",
 *         }]
 * Behavioral questions : [{
 *               question : "",
 *              intention : "",
 *              answer : "",
 *         }]
 * skills gaps : [{
 * skill : "",
 * severity : "",{
 *        type: String,
 *       enum: ['low', 'medium', 'high']
 * }
 * }]
 * preparaion plan : [{
 *     day: Number,
 *     focus: String,
 *     tasks: [String]
 * }]
 * 
 */