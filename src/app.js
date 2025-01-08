import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import route from './routes/index.js';
import key from './config/env.js';
import setupDB from './config/database.js';

const app = express();
app.use(helmet());
app.use(morgan(key.MORGAN_FORMAT));
app.use(cors());
app.use(express.json());
setupDB();

export default route(app);
