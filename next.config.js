/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};

module.exports = {
    env: {
        FAUNA_API_KEY: "fnAEkjynevACSSwG0KAegVYGqelottHf-D68bFA-",
    },
};

module.exports = nextConfig;
