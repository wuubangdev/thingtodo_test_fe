/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1joa7262dhhfa.cloudfront.net',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
