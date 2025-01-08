import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';
import key from './env.js';

const { database } = key;

dotenv.config();

const setupDB = async () => {
  try {
    await mongoose.connect(database.url);
    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`);
  } catch (error) {
    console.error(`${chalk.red('✗')} Connection error: ${error.message}`);
    process.exit(1);
  }
};

export default setupDB;
