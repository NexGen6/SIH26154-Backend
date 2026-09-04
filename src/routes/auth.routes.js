const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');


const router = express.Router();


router.post('/user/register', authMiddleware, adminMiddleware, authController.registerUser);

router.post('/user/login', authController.loginUser);

router.get('/me', authMiddleware, authController.getMe);


module.exports = router 