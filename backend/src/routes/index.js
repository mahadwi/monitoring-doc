import key from '../config/env.js';

export default function route(app) {
  app.get(`/${key.apiUrl}`, (req, res) => res.send('Welcome'));

  // Middleware untuk menangani route yang tidak ditemukan (404)
  app.use((req, res) => {
    res.status(404).json({
      status: 'error',
      message: 'Route Not Found',
    });
  });

  // Middleware general error handler
  app.use((err, req, res, next) => {
    console.error('Error:', err);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Jika di production, jangan tampilkan stack trace
    const response = {
      status: 'error',
      message,
    };

    if (key.nodeEnv !== 'production') {
      response.stack = err.stack;
    }

    res.status(statusCode).json(response);
  });

  return app;
}
