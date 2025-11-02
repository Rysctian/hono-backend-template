import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle', 
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    port: 3307,
    user: 'root', 
    database: 'accounting',
  },
} satisfies Config;