/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Mengarahkan folder pages ke src/pages
  // Ini penting agar Next.js membaca halaman dari src/pages
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  experimental: {
    appDir: false, // Pastikan ini false karena kita menggunakan Pages Router
  },
};

export default nextConfig;
