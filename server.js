// Basic Express server setup
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});


// Sample user list 
let users = [
  { id: 1, username: "alice" },
  { id: 2, username: "bob" }
];

// GET /users endpoint
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users endpoint
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, username: req.body.username };
  users.push(newUser);
  res.status(201).json(newUser);
});
