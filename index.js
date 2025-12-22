const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Desk Booking App is running!");
});

app.post("/book", (req, res) => {
  res.json({ message: "Desk booked!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
