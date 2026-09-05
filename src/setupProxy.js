require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${process.env.BACKEND_HOST}:${BACKEND_PORT}/api`,
      secure: false, // Prevents local self-signed SSL errors
      changeOrigin: true,
    })
  );
};
