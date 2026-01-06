// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example endpoint for desks (dummy data)
app.get("/api/desks", (req, res) => {
  res.json([
    { id: 1, name: "Desk A", available: true },
    { id: 2, name: "Desk B", available: false },
  ]);
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Desk Booking App is healthy",
  });
});

// Serve static files (your front-end build)
app.use(express.static("build"));

// Catch-all for front-end routes (if using React/Vue)
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// Start server
app.listen(port, () => {
  console.log(`Desk Booking App listening on port ${port}`);
});
