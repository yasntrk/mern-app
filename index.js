const express = require('express');
const app = express();
const routes = require('./routes/index');
const connectionDB = require('./databaseConnection');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
connectionDB()
app.use('/api', routes);
app.listen(3009, () => {
  console.log('Server is running on port 3000');
});
