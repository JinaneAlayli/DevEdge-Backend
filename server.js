// devedge-backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
 
app.use(express.json());
app.use(cors());
 
const dbConnect = require('./lib/dbConnect');
dbConnect()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('DB Connection Error: ', err));
 
const homeRoutes = require('./routes/home/route');
const portfolioRoutes = require('./routes/portfolio/route');

app.use('/api/home', homeRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
