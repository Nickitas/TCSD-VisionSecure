/** @type {import('next').NextConfig} */

require('./envValidator');

const nextConfig = {
  reactStrictMode: true,
  
  env: {
    // Только переменные с NEXT_PUBLIC_ будут доступны клиенту
    // Остальные только на сервере
  },
};

module.exports = nextConfig;
