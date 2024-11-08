/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: "https",
            hostname: "res.cloudinary.com",
        },{
            protocol: "https",
            hostname: "*.amazonaws.com",
        },{
            protocol: "https",
            hostname: "*.googleusercontent.com",
        },{
            protocol: "https",
            hostname: "*.githubusercontent.com",
        }
    ,{
        protocol: "https",
        hostname: "images.pexels.com",
    }]

    }
};

export default nextConfig;
