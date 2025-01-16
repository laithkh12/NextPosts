/** @type {import('next').NextConfig} */
// unlock external sites
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'res.cloudinary.com'}]
    }
};

export default nextConfig;
