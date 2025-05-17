import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import route from './routes/index.js';
import key from './config/env.js';
import setupDB from './config/database.js';
import logger from './utils/logger.js';

const app = express();
app.use(helmet());
if (key.nodeEnv === 'production') {
  app.use(
    morgan('combined', {
      stream: { write: (message) => logger.info(message.trim()) },
    }),
  );
} else {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
setupDB();

export default route(app);
