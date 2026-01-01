// server.js
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per windowMs
});
app.use(limiter);

// JSON middleware
app.use(express.json());

// Health check endpoint (required for CI/CD)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Desk Booking App is healthy' });
});

// Example API endpoint for desks (used in smoke tests)
app.get('/api/desks', (req, res) => {
  // Example desk data
  const desks = [
    { id: 1, name: 'Desk 101', status: 'available' },
    { id: 2, name: 'Desk 102', status: 'occupied' },
    { id: 3, name: 'Desk 103', status: 'available' },
  ];
  res.status(200).json(desks);
});

// Root route
app.get('/', (req, res) => {
  res.send('Desk Booking App is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
