const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const participantRoutes = require('./routes/participantRoutes');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/participants', participantRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});
