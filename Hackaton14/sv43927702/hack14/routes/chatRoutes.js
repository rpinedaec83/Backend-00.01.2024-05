const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/messages', chatController.createMessage);
router.get('/messages', chatController.getMessages);
router.put('/messages/:id', chatController.editMessage);
router.delete('/messages/:id', chatController.deleteMessage);
router.post('/clear', chatController.clearHistory);

module.exports = router;
