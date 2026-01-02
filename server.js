const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Desk Booking App is running!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Desk Booking App is healthy'
  });
});

// Only start server if not running tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Desk Booking App listening on port ${port}`);
  });
}

// Export app for testing
module.exports = app;
