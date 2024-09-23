const StudentRecord = require('../models/StudentRecord');
const { subDays } = require('date-fns');
exports.getStudentRecordsByDateRange = async (req, res) => {
  try {
    const days = parseInt(req.params.days, 10);
    if (isNaN(days) || days <= 0) {
      return res.status(400).json({ message: 'Invalid number of days provided' });
    }

    const queryDate = subDays(new Date(), days);
    
    const userId = req.user.userId;

    const studentRecords = await StudentRecord.find({
      userId,
      date: { $gte: queryDate }
    });

    if (studentRecords.length === 0) {
      return res.status(404).json({ message: 'No records found for this user in the specified date range' });
    }

    res.status(200).json(studentRecords);
  } catch (error) {
    console.error('Error in getStudentRecordsByDateRange:', error);
    res.status(500).json({ message: 'Failed to fetch student records', error: error.message });
  }
};