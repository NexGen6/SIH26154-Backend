const submitModel = require('../models/submit.model');


async function createSubmission(req, res) {
     const { sourceType, content , outputTypes } = req.body;

     const submission = await submitModel.create({
          user: req.user.id,
          sourceType,
          content,
          outputTypes
     });

     res.status(201).json({
          message: "Submission created successfully",
          submission
     });
}

module.exports = {
     createSubmission
}