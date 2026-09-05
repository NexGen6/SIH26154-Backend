const { body, validationResult } = require('express-validator');

const validateSubmission = [
  body('sourceType')
    .isIn(["text", "document", "url"])
    .withMessage("Invalid Source Type"),
    
  body('content')
    .trim()
    .notEmpty()
    .withMessage("Content is required"),
    
  body('outputTypes')
    .isArray({ min: 1 })
    .withMessage("At least one output is required"),
    
  (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  }
];

module.exports = validateSubmission;
