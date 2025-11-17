require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp';
mongoose.connect(MONGO)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port', PORT));
