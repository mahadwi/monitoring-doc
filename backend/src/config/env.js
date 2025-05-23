import dotenv from 'dotenv';

dotenv.config();

const key = {
  PORT: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  apiUrl: process.env.API_URL,
  database: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  },
  accessTokenKey: process.env.ACCESS_TOKEN_KEY,
  refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
  accessTokenAge: process.env.ACCESS_TOKEN_AGE,
  refreshTokenAge: process.env.REFRESH_TOKEN_AGE,
};

export default key;
