// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const taskRoutes = require('./routes/taskRoutes'); // Corrected import statement
const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');
app.use(bodyParser.json());
app.use(cors());

// Register the task routes
app.use('/tasks', taskRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
