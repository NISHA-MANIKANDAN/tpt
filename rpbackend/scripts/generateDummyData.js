// // scripts/generateDummyData.js

// const mongoose = require('mongoose');
// const { faker } = require('@faker-js/faker');
// const StudentRecord = require('../models/StudentRecord');

// mongoose.connect('mongodb://localhost:3000/reward_points'); // No need for deprecated options

// const generateDummyData = async (numRecords) => {
//   const records = [];

//   for (let i = 0; i < numRecords; i++) {
//     const record = {
//       name: faker.person.fullName(),
//       cgpa: parseFloat(faker.number.float({ min: 2, max: 4, multipleOf: 0.01 })),
//       attendancePercentage: faker.number.int({ min: 60, max: 100 }),
//       faPercentage: faker.number.int({ min: 50, max: 100 }),
//       rewardPoints: faker.number.int({ min: 0, max: 100 }),
//       year: faker.number.int({ min: 1, max: 4 }),
//       semester: faker.number.int({ min: 1, max: 8 }),
//       rank: faker.number.int({ min: 1, max: 100 }),
//       date: faker.date.recent({ days: 60 }), // Date in the last 60 days
//     };
//     records.push(record);
//   }

//   try {
//     await StudentRecord.insertMany(records);
//     console.log(`${numRecords} student records inserted successfully`);
//   } catch (error) {
//     console.error('Error inserting student records:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// generateDummyData(10); // Generate 100 dummy student records
