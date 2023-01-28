/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'i.ytimg.com'] ,
    },
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
