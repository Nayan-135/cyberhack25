// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URI from environment variables
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/bankingDB';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

// Create a simple User Schema for testing
const userSchema = new mongoose.Schema({
  name: String,
  accountType: String,
  balance: Number
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Optional: Add a test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Banking API!');
});

// Optional: Add a test route to create a new user in the database
app.post('/create-user', (req, res) => {
  const { name, accountType, balance } = req.body;

  const newUser = new User({
    name,
    accountType,
    balance
  });

  // Save the new user to the database
  newUser.save()
    .then((user) => {
      res.json({ message: 'User created successfully!', user });
    })
    .catch((err) => {
      console.error("Error saving user:", err);
      res.status(500).json({ error: "Error saving user" });
    });
});

// Set the server to listen on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
