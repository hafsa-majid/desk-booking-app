const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample desks data
let desks = [
  { id: 1, name: 'Desk 1', available: true },
  { id: 2, name: 'Desk 2', available: true },
  { id: 3, name: 'Desk 3', available: false }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Desk Booking App is healthy!' });
});

// API endpoint for desks
app.get('/api/desks', (req, res) => {
  res.status(200).json(desks);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Desk Booking App is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Desk Booking App listening at http://localhost:${port}`);
});
