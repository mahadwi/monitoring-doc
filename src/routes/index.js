import apiRouter from './apiRouter.js';

export default function route(app) {
  app.use('/', apiRouter);
  
  app.use((req, res, next) => {
    res.status(404).json({
      status: 'error',
      message: 'Route Not Found',
    });
  });
  
  const generalErrorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
      status: 'error',
      message: err.message || 'Internal Server Error',
    });
  };

  app.use(generalErrorHandler);
  return app;
}