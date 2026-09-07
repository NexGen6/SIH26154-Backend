const submitModel = require('../models/submit.model');
const outputModel = require('../models/output.model');
const { generateContent } = require('../services/ai.service');


async function createSubmission(req, res) {
     const { sourceType, content , outputTypes , audience , tone , language , detailLevel , objective } = req.body;

     const submission = await submitModel.create({
          user: req.user.id,
          sourceType,
          content,
          outputTypes,
          audience,
          tone,
          language,
          detailLevel,
          objective,
          status: "processing"
     });

     try {
          const outputs = [];

          for(const outputType of outputTypes) {

               const generatedContent = await generateContent(
                    content,
                    outputType,
                    audience,
                    tone,
                    language,
                    detailLevel,
                    objective
               );

               const output = await outputModel.create({
                    submission: submission._id,
                    type: outputType,
                    content: generatedContent,
                    status: "completed"
               });

               outputs.push(output);
          }

          submission.status = "completed";
          await submission.save();

          res.status(201).json({
               message: "submission processed successfully",
               submission,
               outputs
          });
     } catch (error) {
          submission.status = "failed";
          await submission.save();

          console.log("AI generation error :" , error);

          res.status(500).json({
               message: "Failed to process submission"
          });
     }
}

async function getMySubmissions(req, res) {

     const submissions = await submitModel.find({
          user: req.user.id
     });

     res.status(200).json({
          submissions
     });
}

module.exports = {
     createSubmission,
     getMySubmissions
}