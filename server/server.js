require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const participantRoutes = require('./routes/participantRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', participantRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
