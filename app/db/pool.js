import { Pool } from 'pg'
const dotenv = require('dotenv');
dotenv.config();

const db_config = {
  connectionString: process.env.DATABASE_URL,
  user: 'database-user',
  max: 20,
  idleTimeoutMillis: 300,
  connectionTimeoutMillis: 200,
}

 
const pool = new Pool(db_config);

pool.on('connect', (client) => {
  console.error('connect')
});

pool.on('remove', (client) => {
  console.error('remove')
});

exports.Pool;