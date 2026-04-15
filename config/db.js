module.exports = {
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 50,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ytuj_cn',
  multipleStatements: false
};