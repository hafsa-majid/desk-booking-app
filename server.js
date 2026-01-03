const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3000;

// ✅ Safety & Security Middleware (LO3/LO4)
app.use(helmet()); // Sets secure HTTP headers
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: { error: 'Too many requests, please try again later.' }
});
app.use(limiter);

// Root route
app.get('/', (req, res) => {
  res.send('Desk Booking App API is running');
});

// ✅ Health check (with performance metrics for LO3)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Version metadata
app.get('/version', (req, res) => {
  res.status(200).json({
    version: '1.0.0',
    gitBranch: process.env.RENDER_GIT_BRANCH || 'unknown',
    environment: process.env.NODE_ENV || 'development'
  });
});

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.originalUrl
  });
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Desk Booking App listening on port ${port}`);
  });
}

module.exports = app;