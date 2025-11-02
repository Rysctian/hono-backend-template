import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3307'),
  database: process.env.DB_NAME || 'accounting',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', 
  charset: 'utf8mb4',
  connectionLimit: 10,
});

export const db = drizzle(pool);

export const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL connected successfully via Drizzle ORM');
    connection.release();
  } catch (error) {
    console.error('❌ MySQL connection failed:', error);
    process.exit(1);
  }
};