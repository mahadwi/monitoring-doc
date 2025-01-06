import dotenv from 'dotenv';

dotenv.config();

const key = {
  PORT: process.env.PORT,
  MORGAN_FORMAT: process.env.MORGAN_FORMAT,
};

export default key;
