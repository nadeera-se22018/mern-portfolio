const express = require('express');
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
