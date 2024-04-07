/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/josecruz9/**',
          },
        ],
    },
};
// module.exports = { images: { domains: ['*'], formats: ['image/avif', 'image/webp'], }, }
export default nextConfig;
