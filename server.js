const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root route (optional but helpful)
app.get('/', (req, res) => {
  res.send('Desk Booking App API is running');
});

// ✅ Health check endpoint (with performance metrics)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Desk Booking App is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ✅ Version / build metadata endpoint
app.get('/version', (req, res) => {
  res.status(200).json({
    version: '1.0.0',
    buildDate: new Date().toISOString(),
    gitBranch: process.env.RENDER_GIT_BRANCH || 'unknown',
    gitCommit: process.env.RENDER_GIT_COMMIT || 'unknown',
    environment: process.env.NODE_ENV || 'development'
  });
});

// ✅ 404 handler (important for error-handling marks + tests)
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.originalUrl
  });
});

// ✅ Only start server if NOT running tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Desk Booking App listening on port ${port}`);
  });
}

// ✅ Export app for Jest testing
module.exports = app;
