/** @type {import('next').NextConfig} */
const nextConfig={
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ['page.tsx','page.ts','page.jsx','page.js'],
}
module.exports=nextConfig;
  
