const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "cms.oliverturp.co.uk",
                pathname: "/**"
            },
            {
                protocol: "http",
                hostname: "localhost",
                pathname: "/**"
            },
        ],
    },
        // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },
};

module.exports = nextConfig;