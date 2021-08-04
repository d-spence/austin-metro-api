const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env config
const config = dotenv.config({ path: './config/config.env' });
if (config.error) {
  throw config.error;
} else {
  console.log(`Config loaded!`.green);
  console.log(config.parsed);
}

// TODO: Load gtfs transit data into database
// connectDB(); // Connect to MongoDB

// Import routes
const stops = require('./routes/stops');

// Initialize express
const app = express();

// Express middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Use morgan if running in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Route paths
app.use('/api/v1/stops/', stops);

// Start express
const PORT = process.env.PORT || 9001;

app.listen(PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
