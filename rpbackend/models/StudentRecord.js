const mongoose = require('mongoose');

const studentRecordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cgpa: { type: Number, required: true },
  attendancePercentage: { type: Number, required: true },
  faPercentage: { type: Number, required: true },
  rewardPoints: { type: Number, required: true },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  rank: { type: Number, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true }, // Add userId to reference the logged-in user
});

const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.exports = StudentRecord;
