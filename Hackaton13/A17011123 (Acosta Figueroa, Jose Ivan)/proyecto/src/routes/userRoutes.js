const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);

// {
//     "name": "jose test",
//     "email": "jose@example.com",
//     "password": "josejose"
//   }
  
router.post('/login', loginUser);

// {
//     "email": "jose@example.com",
//     "password": "josejose"
//   }
router.get('/profile', protect, getUserProfile);

module.exports = router;
