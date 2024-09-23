// app.js
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes.js');
const authRoutes = require('./routes/authRoutes.js'); // Import the auth routes
const academicRoutes=require('./routes/academicRoutes.js')

const app = express();

// Global middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.use('/api/dashboard', academicRoutes); // Mount auth routes

// Catch-all route for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found',
  });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

module.exports = app;
