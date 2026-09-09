const { body, validationResult } = require('express-validator');

const validateSubmission = [
  body('sourceType')
    .isIn(["text", "document", "url"])
    .withMessage("Invalid Source Type"),
  
  body('outputTypes')
    .isArray({ min: 1 })
    .withMessage("At least one output is required"),

  body('audience')
    .trim()
    .notEmpty()
    .withMessage("Audience is required"),

  body('tone')
    .trim()
    .notEmpty()
    .withMessage("Tone is required"),

  body('language')
    .trim()
    .notEmpty()
    .withMessage("Language is required"),

  body('detailLevel')
    .trim()
    .notEmpty()
    .withMessage("Detail level is required"),

  body('objective')
    .trim()
    .notEmpty()
    .withMessage("Objective is required"),
    
  (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if(req.body.sourceType === 'document' && !req.file) {
      return res.status(400).json({
        message: "PDF file is required for document source",
      });
    }

    if(req.body.sourceType === 'text' && !req.body.content) {
      return res.status(400).json({
        message: 'Content is required for text source',
      });
    }

    next();
  }
];

module.exports = validateSubmission;
