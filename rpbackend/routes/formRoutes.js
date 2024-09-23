// const express = require('express');
// const formController = require('../controllers/formController');
// const authController = require('../controllers/authController');

// const router = express.Router();

// // Middleware to protect routes
// // You can uncomment this if you need authentication for these routes
// // router.use(authController.protect);

// // Routes for handling form submissions and operations

// // GET all forms
// router.route('/')
//   .get(authController.protect, authController.restrictTo('admin'), formController.getAllForms);

// // POST a new form submission
// router.route('/')
//   .post(authController.protect, formController.createForm);

// // GET a specific form by ID
// router.route('/:id')
//   .get(authController.protect, formController.getFormById);

// // PATCH (update) a specific form by ID
// router.route('/:id')
//   .patch(authController.protect, formController.updateFormById);

// // DELETE a specific form by ID
// router.route('/:id')
//   .delete(authController.protect, formController.deleteFormById);

// module.exports = router;
