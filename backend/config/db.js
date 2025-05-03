// config/db.js
require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.MARIO,
  host: process.env.LOCALHOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
