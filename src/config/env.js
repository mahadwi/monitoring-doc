import dotenv from 'dotenv';

dotenv.config();

const key = {
  PORT: process.env.PORT,
  MORGAN_FORMAT: process.env.MORGAN_FORMAT,
  database: { url: process.env.MONGODB_URL },
};

export default key;
