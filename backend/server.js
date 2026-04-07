const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic endpoint to test if it's working
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running' });
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected successfully');
    
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();
