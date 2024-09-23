const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const studentRecordController = require('../controllers/studentRecordController');

// Make sure the route parameter is defined correctly
router.get('/:days', authenticateToken, studentRecordController.getStudentRecordsByDateRange);

module.exports = router;