const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'database-2.c1ceu4emuu2k.eu-north-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'Vaishali#1009',
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Use SSL in production with a valid certificate
});

module.exports = pool;