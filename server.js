import os from 'os';
import chalk from 'chalk';
import app from './src/app.js';

const { PORT = 8000 } = process.env;

const server = app.listen(PORT, () => {
  const osPlatform = os.platform();
  console.log(`${chalk.green('✓')} ${chalk.blue('Platform running on:')} ${chalk.blue(osPlatform)}`);
  console.log(`${chalk.green('✓')} ${chalk.blue('Server listening on port:')} ${chalk.blue(PORT)}`);
});

// Penanganan Error
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  // Menangani error spesifik dengan pesan
  switch (error.code) {
    case 'EACCES':
      console.error(`${chalk.red('✗')} ${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${chalk.red('✗')} ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
