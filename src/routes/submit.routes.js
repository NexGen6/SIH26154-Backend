const express = require('express');
const subController = require('../controllers/submit.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validateSubmission = require('../middlewares/submission.validation');


const router = express.Router();


router.post('/submission', authMiddleware, validateSubmission, subController.createSubmission);


module.exports = router;