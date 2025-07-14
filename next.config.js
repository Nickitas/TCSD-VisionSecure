/** @type {import('next').NextConfig} */

require("./envValidator");

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://visionsecure.donstu.ru/:path*",
      },
    ];
  },

  env: {
    // Только переменные с NEXT_PUBLIC_ будут доступны клиенту
    // Остальные только на сервере
  },
};

module.exports = nextConfig;
