/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, 
  
  // 👈 Important
    
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
